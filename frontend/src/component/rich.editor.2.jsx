'use client'
import React, { useState, useEffect, useRef } from 'react';
import 'quill/dist/quill.snow.css'
import axiosClient from '@/api/axiosClient';
import '../app/globals.css'

const Quill = typeof window === 'object' ? require('quill') : () => false;
const QuillImageDropAndPaste =
    typeof window === "object"
        ? require("quill-image-drop-and-paste").default
        : () => false;

export default function QuillEditor(props) {
    const quillRef = useRef();
    const [quill, setQuill] = useState(null);
    console.log()
    useEffect(() => {
        if (quillRef.current) {
            Quill.register('modules/imageDropAndPaste', QuillImageDropAndPaste);
            const quill = new Quill(quillRef.current, {
                modules: {
                    toolbar: [
                        [{ header: '1' }, { header: '2' }, { font: [] }],
                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                        [
                            { list: 'ordered' },
                            { list: 'bullet' },
                            { indent: '-1' },
                            { indent: '+1' },
                        ],
                        ['link', 'image', 'video'],
                        ['clean'],
                        ['code-block'],
                    ],
                    imageDropAndPaste: {
                        handler: (dataUrl, type, imageData) => {
                            const originalFile = imageData.toFile();
                            const formData = new FormData();
                            formData.append('file', originalFile);
                            //TODO: Fix there
                            axiosClient.post('/api/upload', formData, {
                                headers: {
                                    'content-type': 'multipart/form-data',
                                },
                                onUploadProgress: (event) => {
                                    console.log(`Current progress:`, event.progress);
                                },
                            }).then((res) => {
                                console.log('upload response: ', res.data);
                            }).catch((err) => {
                                console.log(quill);
                                let index = (quill.getSelection() || {}).index
                                if (index === undefined || index < 0) index = quill.getLength()
                                quill.insertEmbed(index, 'image', 'https://wallpapershome.com/images/pages/pic_h/24113.jpeg', 'user')
                            });
                        },
                    }
                },
                placeholder: 'Copy & paste, or drag an image here...',
                readOnly: false,
                theme: 'snow',
                value: props.value,
                onchange: (content, delta, source, editor) => {
                    props.setValue(content)
                    console.log(editor.getContents())
                }
            });
            setQuill(quill);
            quill.pasteHTML(props.value)
            console.log(props.value)
            const ImageData = QuillImageDropAndPaste.ImageData
            quill.getModule('toolbar').addHandler('image', function (clicked) {
                if (clicked) {
                    let fileInput = this.container.querySelector('input.ql-image[type=file]')
                    if (fileInput == null) {
                        fileInput = document.createElement('input')
                        fileInput.setAttribute('type', 'file')
                        fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon')
                        fileInput.classList.add('ql-image')
                        fileInput.addEventListener('change', function (e) {
                            const files = e.target.files
                            let file
                            if (files.length > 0) {
                                file = files[0]
                                const type = file.type
                                const reader = new FileReader()
                                reader.onload = (e) => {
                                    //TODO: Fix there
                                    const dataUrl = e.target.result;
                                    const imageData = new ImageData(dataUrl, type, file.name)
                                    const originalFile = imageData.toFile();
                                    const formData = new FormData();
                                    formData.append('file', originalFile);
                                    axiosClient.post('/api/upload', formData, {
                                        headers: {
                                            'content-type': 'multipart/form-data',
                                        },
                                        onUploadProgress: (event) => {
                                            console.log(`Current progress:`, event.progress);
                                        },
                                    }).then((res) => {
                                        console.log('upload response: ', res.data);
                                    }).catch((err) => {
                                        console.log(quill);
                                        let index = (quill.getSelection() || {}).index
                                        if (index === undefined || index < 0) index = quill.getLength()
                                        quill.insertEmbed(index, 'image', 'https://lh3.googleusercontent.com/p/AF1QipPAC4sxvorsTubljTz0JwtL6dKpx9uD0doqM-2S=s680-w680-h510', 'user')
                                    });
                                    fileInput.value = ''
                                }
                                reader.readAsDataURL(file)
                            }
                        })
                    }
                    fileInput.click()
                }
            })
        }
    }, [quillRef])

    return (
        <div className="quill-page">
            <h1>Next.js Example</h1>
            <div ref={quillRef} style={{ background: '#fff', color: '#000' }}></div>
        </div>
    )
}