'use client'
import dynamic from "next/dynamic";
import { useState } from "react";
import { Button } from '@mui/material';

const MyEditor = dynamic(() => import("@/component/app.full.editor.jsx"), { ssr: false });

export default function CreatePost() {
    const [value, setValue] = useState(null);
    return (
        <>
            <MyEditor value={value} setValue={setValue} />
            <div style={{ position: 'relative', marginTop: 10 }}>
                <Button variant="contained" style={{ position: 'absolute', right: 0 }} onClick={() => { console.log(value) }}>Đăng</Button>
            </div>
        </>
    )
}