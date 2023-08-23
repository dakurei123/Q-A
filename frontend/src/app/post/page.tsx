'use client'
import { Card, Col, Container, Row } from "react-bootstrap"
import HTMLReactParser from 'html-react-parser';
import UserCard from "@/component/app.card.user";
import { useState } from "react";
import dynamic from "next/dynamic";
import '../globals.css'
import { Button } from "@mui/material";
import Comment from '@/component/comment/app.comment'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Vote from "@/component/point/app.vote";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const EditorNoToolBar = dynamic(() => import("@/component/app.no.toolbar.editor.jsx"), { ssr: false });

const Post = () => {
    const tmp = `<p>Trong bài giới thiệu đầu tiên, các bạn đã có thể hiểu sức mạnh của NextJS trong lập trình website ở thời điểm năm 2023. Ở bài đầu tiên trong series lập trình NextJS, tôi sẽ hướng dẫn các bạn cách cài đặt môi trường để lập trình và cài đặt 1 chương trình NextJS đầu tiên.&lt;br&gt; Các bạn có thể xem bài viết về việc tại sao nên chọn lập trình NextJS ở thời điểm hiện tại <a href="https://viblo.asia/p/tai-sao-phai-hoc-nextjs-thay-vi-reactjs-trong-nam-2023-y37LdDroLov" rel="noopener noreferrer" target="_blank">tại đây</a></p><p>1. Cài đặt <a href="https://nodejs.org/en" rel="noopener noreferrer" target="_blank">NodeJS</a></p><ul><li>Như các bạn đã biết, ReactJS cũng như NextJS đều chạy trên môi trường NodeJS. Vì thế nên máy tính của bạn cần cài đặt môi trường Node để có thể lập trình NextJS. Các bước để cài đặt NodeJS:</li></ul><ol><li>Bước 1. Truy cập trang https://nodejs.org/en</li><li>Bước 2. Tải phiên bản NodeJS phù hợp với máy window hay macOS</li><li>Bước 3. Cài đặt</li><li>Bước 4. Kiểm tra thành công</li></ol><ul><li>Khi cài đặt xong NodeJS hãy chạy lệnh sau đây để kiểm tra xem bạn đã cài đặt thành công hay chưa:</li></ul><pre class="ql-syntax" spellcheck="false">node -v asd a sd as d asd a sd asd asd 
    asdf
    asdf
    a
    sdf
    a
    sdf
    
    asdf
    a
    sdf
    asd
    fa
    sdf
     asd
    
    </pre><p>Nếu kết quả hiện ra version của Node hiện tại của bạn trên máy thì việc cài đặt Node trên máy tính của bạn đã thành công.</p><p>2. Cài đặt IDE để lập trình</p><ul><li>Tôi đề xuất các bạn sử dụng VScode để lập trình NextJS. VScode có rất nhiều ưu điểm trong lập trình web vì nó hỗ trợ đa dạng các extention giúp bạn nhắc code và các tiện ích khác.</li><li>Để cài đặt VScode các bạn làm theo các bước sau:</li></ul><ol><li>Bước 1. Truy cập VS code https://code.visualstudio.com/</li><li>Bước 2. Tải và cài đặt</li></ol><ul><li>Danh sách các extention cần thiết khi lập trình NextjS:</li><li class="ql-indent-1"><strong>ESLint Extension</strong>: Cung cấp tích hợp ESLint trong VSCode, giúp bạn phát hiện lỗi và cải thiện chất lượng mã.</li><li class="ql-indent-1"><strong>codettier Extension:</strong> Kết hợp codettier với VSCode để tự động định dạng mã khi lưu tệp.</li><li class="ql-indent-1"><strong>Next.js Extension Pack (optional)</strong>: Đây là một gói extension được tạo ra cho việc phát triển với Next.js. Nó bao gồm một số extension quan trọng như "Next.js Development", "Tailwind CSS IntelliSense" (nếu bạn sử dụng Tailwind CSS), và nhiều công cụ hữu ích khác.</li><li class="ql-indent-1"><strong>Debugger for Chrome (optional):</strong> Nếu bạn cần gỡ lỗi trong ứng dụng Next.js của mình, phần mở rộng này cho phép bạn sử dụng trình duyệt Chrome để gỡ lỗi mã JavaScript của mình.</li><li class="ql-indent-1"><strong>GraphQL Extension (nếu cần)</strong>: Nếu ứng dụng của bạn sử dụng GraphQL, một extension hỗ trợ GraphQL như "GraphQL for VSCode" có thể hữu ích để việc phát triển và gỡ lỗi.</li><li class="ql-indent-1"><strong>Tailwind CSS IntelliSense (nếu sử dụng Tailwind CSS):</strong> Đây là một extension hỗ trợ cho Tailwind CSS giúp bạn có được gợi ý lớp CSS khi viết mã.</li><li class="ql-indent-1"><strong>Markdown All in One (nếu viết tài liệu dưới dạng Markdown):</strong> Nếu bạn viết tài liệu dưới dạng Markdown, extension này giúp bạn viết và định dạng nhanh chóng.</li></ul><p>3. Cài đặt và chạy chương trình NextJS đầu tiên</p><p>Các bạn làm theo các bước sau</p><ol><li>Bước 1. Chạy lệnh npx create-next-app@latest</li><li>Bước 2. Di chuyển tới thư mục vừa tạo</li><li>Bước 3. Chạy trương trình đầu tiên với lệnh npm run dev</li><li>Bước 4. Truy cập đến địa chỉ http://localhost:3000 để xem kết quả</li></ol><p>4. Tóm tắt</p><p>Trên đây là các bước giúp bạn cài đặt môi trường lập trình và chạy 1 chương trình NextJS đầu tiên. Các bạn có thể xem tham khảo chi tiết qua video dưới đây:</p><p>/&gt;</p>
     `
    const tmp3 = HTMLReactParser(tmp)
    const avatarSrc = 'Brand.jpg';
    const authorName = 'AlixXXXXce JohnsXXXXon';
    const questionDate = '10/10/2XXXX023';

    const [comment, setComment] = useState(null);
    const q1: IComment = {
        avatarSrc: 'Brand.jpg',
        authorName: 'Alice Johnson',
        questionDate: '10/10/2023',
        questionTitle: HTMLReactParser(`<p>Trong bài giới thiệu đầu tiên, các bạn đã có thể hiểu sức mạnh của NextJS trong lập trình website ở thời điểm năm 2023. Ở bài đầu tiên trong series lập trình NextJS, tôi sẽ hướng dẫn các bạn cách cài đặt môi trường để lập trình và cài đặt 1 chương trình NextJS đầu tiên.&lt;br&gt; Các bạn có thể xem bài viết về việc tại sao nên chọn lập trình NextJS ở thời điểm hiện tại <a href="https://viblo.asia/p/tai-sao-phai-hoc-nextjs-thay-vi-reactjs-trong-nam-2023-y37LdDroLov" rel="noopener noreferrer" target="_blank">tại đây</a></p><p>1. Cài đặt <a href="https://nodejs.org/en" rel="noopener noreferrer" target="_blank">NodeJS</a></p><ul><li>Như các bạn đã biết, ReactJS cũng như NextJS đều chạy trên môi trường NodeJS. Vì thế nên máy tính của bạn cần cài đặt môi trường Node để có thể lập trình NextJS. Các bước để cài đặt NodeJS:</li></ul><ol><li>Bước 1. Truy cập trang https://nodejs.org/en</li><li>Bước 2. Tải phiên bản NodeJS phù hợp với máy window hay macOS</li><li>Bước 3. Cài đặt</li><li>Bước 4. Kiểm tra thành công</li></ol><ul><li>Khi cài đặt xong NodeJS hãy chạy lệnh sau đây để kiểm tra xem bạn đã cài đặt thành công hay chưa:</li></ul><code class="ql-syntax" spellcheck="false">node -v
    asd
    a
    sd
    as
    d
    asd
    a
    sd
    
    asd
    
    asd
    </code>`),
        id: 123,
        parentId: null,
        replies: [{
            avatarSrc: 'Brand.jpg',
            authorName: 'Alice Johnson',
            questionDate: '10/10/2023',
            questionTitle: HTMLReactParser(`<p>Trong bài giới thiệu đầu tiên, các bạn đã có thể hiểu sức mạnh của NextJS trong lập trình website ở thời điểm năm 2023. Ở bài đầu tiên trong series lập trình NextJS, tôi sẽ hướng dẫn các bạn cách cài đặt môi trường để lập trình và cài đặt 1 chương trình NextJS đầu tiên.&lt;br&gt; Các bạn có thể xem bài viết về việc tại sao nên chọn lập trình NextJS ở thời điểm hiện tại <a href="https://viblo.asia/p/tai-sao-phai-hoc-nextjs-thay-vi-reactjs-trong-nam-2023-y37LdDroLov" rel="noopener noreferrer" target="_blank">tại đây</a></p><p>1. Cài đặt <a href="https://nodejs.org/en" rel="noopener noreferrer" target="_blank">NodeJS</a></p><ul><li>Như các bạn đã biết, ReactJS cũng như NextJS đều chạy trên môi trường NodeJS. Vì thế nên máy tính của bạn cần cài đặt môi trường Node để có thể lập trình NextJS. Các bước để cài đặt NodeJS:</li></ul><ol><li>Bước 1. Truy cập trang https://nodejs.org/en</li><li>Bước 2. Tải phiên bản NodeJS phù hợp với máy window hay macOS</li><li>Bước 3. Cài đặt</li><li>Bước 4. Kiểm tra thành công</li></ol><ul><li>Khi cài đặt xong NodeJS hãy chạy lệnh sau đây để kiểm tra xem bạn đã cài đặt thành công hay chưa:</li></ul><code class="ql-syntax" spellcheck="false">node -v
    asd
    a
    sd
    as
    d
    asd
    a
    sd
    
    asd
    
    asd
    </code>`),
            id: 222,
            parentId: 123,
            replies: null
        }, {
            avatarSrc: 'Brand.jpg',
            authorName: 'Alice Johnson',
            questionDate: '10/10/2023',
            questionTitle: HTMLReactParser(`<p>Trong bài giới thiệu đầu tiên, các bạn đã có thể hiểu sức mạnh của NextJS trong lập trình website ở thời điểm năm 2023. Ở bài đầu tiên trong series lập trình NextJS, tôi sẽ hướng dẫn các bạn cách cài đặt môi trường để lập trình và cài đặt 1 chương trình NextJS đầu tiên.&lt;br&gt; Các bạn có thể xem bài viết về việc tại sao nên chọn lập trình NextJS ở thời điểm hiện tại <a href="https://viblo.asia/p/tai-sao-phai-hoc-nextjs-thay-vi-reactjs-trong-nam-2023-y37LdDroLov" rel="noopener noreferrer" target="_blank">tại đây</a></p><p>1. Cài đặt <a href="https://nodejs.org/en" rel="noopener noreferrer" target="_blank">NodeJS</a></p><ul><li>Như các bạn đã biết, ReactJS cũng như NextJS đều chạy trên môi trường NodeJS. Vì thế nên máy tính của bạn cần cài đặt môi trường Node để có thể lập trình NextJS. Các bước để cài đặt NodeJS:</li></ul><ol><li>Bước 1. Truy cập trang https://nodejs.org/en</li><li>Bước 2. Tải phiên bản NodeJS phù hợp với máy window hay macOS</li><li>Bước 3. Cài đặt</li><li>Bước 4. Kiểm tra thành công</li></ol><ul><li>Khi cài đặt xong NodeJS hãy chạy lệnh sau đây để kiểm tra xem bạn đã cài đặt thành công hay chưa:</li></ul><code class="ql-syntax" spellcheck="false">node -v
    asd
    a
    sd
    as
    d
    asd
    a
    sd
    
    asd
    
    asd
    </code>`),
            id: 223,
            parentId: 123,
            replies: null
        }]
    }
    const [isUpVote, setIsUpVote] = useState(false);
    const [isDownVote, setIsDownVote] = useState(false);

    return (
        <>
            <Container>
                <Card style={{ padding: 20, marginBottom: 40 }}>
                    <Row>
                        <div style={{ width: 'fit-content' }}>
                            <UserCard avatarSrc={avatarSrc}
                                authorName={authorName}
                                questionDate={questionDate} />
                        </div>
                        <Col>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <BookmarkIcon style={{ width: 40, height: 40 }} />
                                    <Vote isUpVote={isUpVote}
                                        isDownVote={isDownVote}
                                        point={0}
                                        clickUpVote={() => { setIsUpVote(!isUpVote); isUpVote === false ? setIsDownVote(false) : null }}
                                        clickDownVote={() => { setIsDownVote(!isDownVote); isDownVote === false ? setIsUpVote(false) : null }} />
                                </div>
                                <div style={{ paddingRight: 12 }}>
                                    <EditIcon style={{ width: 40, height: 40 }} className="yellow" />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <DeleteIcon style={{ width: 40, height: 40 }} className="red" />
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {tmp3}
                </Card>
                <h2 style={{ color: '#000' }}>Bình luận</h2>
                <EditorNoToolBar value={comment} setValue={setComment} placeholder='Viết câu trả lời hoặc bình luận của bạn tại đây ...' />
                <div style={{ position: 'relative', marginTop: 10, marginBottom: 80 }}>
                    <Button variant="contained" style={{ position: 'absolute', right: 0 }} onClick={() => { console.log(comment) }}>Gửi</Button>
                </div>

                <Comment
                    comment={q1}
                />
            </Container>
        </>
    )
}

export default Post