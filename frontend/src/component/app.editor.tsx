'use client'
import React, { useState } from "react";
import { convertToRaw, EditorState, convertFromHTML, ContentState } from "draft-js";
import {  Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";

const MyEditor = () => {
    const tmp = convertFromHTML(`<p>Trước tiên truy cập trang chủ truy cập tab newest <a href="https://viblo.asia/newest">https://viblo.asia/newest</a> </p>
    <p><img src="https://images.viblo.asia/c1ac510a-59c5-4f51-a629-fae0107ef61c.png" alt=""></p>
    <p>Có nhiều cách để crawl data có thể dùng, sau đây mình giới thiệu 2 cách mình đã sử dụng </p>
    <h2 id="c-ch-1">Cách 1</h2>
    <p>bạn kéo xuống cuối trang và click vào page 2 mục địch là kiếm api gọi khi chuyển trang!</p>
    <p>F12 lên kiếm api nào filter với từ khóa new
    <img src="https://images.viblo.asia/690d5bda-2344-41db-b861-ba367c8fd313.png" alt=""></p>
    <p>nó đây <code>https://viblo.asia/api/posts/newest?page=2&amp;limit=20</code></p>
    <p>trong url ta thấy có limit kìa :v</p>
    <p>thử limit vs 30 xem
    <a href="https://viblo.asia/api/posts/newest?page=2&amp;limit=30">https://viblo.asia/api/posts/newest?page=2&amp;limit=30</a></p>
    <p><img src="https://images.viblo.asia/e6603632-e001-4e50-ba05-b4e62bd5bbaf.png" alt=""></p>
    <p>ngon.. ra 30 luôn</p>
    <p>thử tip 60 coi nà 
    <img src="https://images.viblo.asia/fbcc3e79-2229-4a72-8855-4ca5ee21672f.png" alt=""></p>
    <p>đìu.. ra luôn (ngon)</p>
    <p>lướt lên lại đầu trang ta thấy viblo có ~1200 trang thử với 1000x20 =20000 limit xem nà (mặc định paging của viblo là 20) có khi chỉ cần 1 api là có hết data của viblo :v: </p>
    <p><img src="https://images.viblo.asia/45b7fbe5-cb76-42c0-acd1-17ffd6ac5532.png" alt=""></p>
    <p>đìu méo được.. api đã giới hạn max là 100 rồi :D</p>
    <p>công việc tiếp theo là viết code loop call tới api để lấy data về dùng thôi =))</p>
    <h2 id="c-ch-2">Cách 2</h2>
    <p>Cách này chủ yếu là để nghiên cứu thêm cách sử  dụng puppeteer, tài liệu của nó đây <a href="https://github.com/puppeteer/puppeteer">puppeteer</a> mô tả ngắn gọn về nó thì nó giúp chúng ta tương tác với browser mà ko cần giao diện :D</p>
    <p>Nhiệm vụ chính của chúng ta thì chỉ cần như thế này thôi:</p>
    <p>Step 1: Truy cập url</p>
    <p>Step 2: Crawl dữ liệu</p>
    <p>Step 3: Chuyển trang</p>
    <p>Step 4: Crawl dữ liệu</p>
    <p>Step 5: Chuyển trang</p>
    <p>loop tới khi nào hết thì thôi :v</p>
    <p>Băt đầu như lúc truy cập vào browser ta cần địa chỉ của url cần đến</p>
    <p>Thông thường thì muốn <code>https://viblo.asia/newest</code></p>
    <p>Convert qua puppeteer thôi:</p>
    <p>Giả lập trình duyệt thôi tạo browser trong browser tạo new tab (page) :v</p>
    <pre><code class="lang-javascript"><span class="hljs-keyword">const</span> browser = <span class="hljs-function">await pt.<span class="hljs-title">launch</span><span class="hljs-params">({
            headless: <span class="hljs-keyword">false</span>,
            args: [<span class="hljs-string">"--no-sandbox"</span>, <span class="hljs-string">"--disable-setuid-sandbox"</span>],
          })</span></span>;
        <span class="hljs-keyword">const</span> page = <span class="hljs-function">await browser.<span class="hljs-title">newPage</span><span class="hljs-params">()</span></span>;
    </code></pre>
    <p>Step 1: Truy cập url</p>
    <pre><code class="lang-javascript">await page.<span class="hljs-keyword">goto</span>(<span class="hljs-symbol">"https</span>://viblo.asia/<span class="hljs-symbol">"newest</span> ",{waitUntil: <span class="hljs-symbol">"load</span>"});
    </code></pre>
    <p>waitUntil load =&gt; có nghĩa là truy cập trang và chờ tời khi trang load xong rồi mới xử lí tiếp</p>
    <p>bình thường thì chỉ cần check api và lấy dữ liệu về thôi.. nhưng ko mình muốn sử dụng puppeteer để đọc html và lấy thông tin từ đó.. ta cùng xem cấu trúc nội dung list post của viblo:</p>
    <p><img src="https://images.viblo.asia/d1bd2088-4a6d-4463-a341-b98a90dd9f8b.png" alt=""></p>
    <p>bây giờ mình muốn lấy cái slug của bài viết(<strong>aWj53Dd1K6m</strong>) thì nó nằm ở thẻ a trong thuộc tính href... Vậy làm cách nào để lấy được giá trị đó, minh nghĩ tới dùng javascript đầu tiên</p>
    <p>Và để dùng javascript trong puppeteer ta sử dụng api <strong>evaluate()</strong></p>
    <pre><code class="lang-javascript">articles = <span class="hljs-keyword">await</span> page.evaluate(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                <span class="hljs-keyword">let</span> imgElements = <span class="hljs-built_in">document</span>.querySelectorAll(<span class="hljs-string">".post-title--inline h3 a"</span>);
                imgElements = [...imgElements];
                <span class="hljs-keyword">let</span> articles = imgElements.map(<span class="hljs-function"><span class="hljs-params">i</span> =&gt;</span> {
                    <span class="hljs-keyword">return</span> i.getAttribute(<span class="hljs-string">"href"</span>).split(<span class="hljs-string">"-"</span>).pop();
                });
                <span class="hljs-keyword">return</span> articles;
            });
    </code></pre>
    <p>đọc sơ qua thì ta có thể hiểu là lấy 1 list thẻ a.. loop lấy từng cái lấy thuộc tính href cắt nhỏ thông qua dấu &#39;-&#39; sau đó lấy phần tử cuối</p>
    <p>Kết quả cuối cùng ta được mảng slug của danh sánh bài post ở trang hiện tại =&gt; ta lưu vào ở đâu đó để sử dụng.. lưu ở file.. ở database</p>
    <p>Vậy lấy thêm 1 rồi thi làm gì tiếp ae.. tất nhiên là chuyển qua trang khác để lấy tiếp dữ liệu.. cho nên
    ta nên vứt đoạn code trên trong vòng lặp.. ta lấy 500 trang thôi nha :D</p>
    <pre><code><span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">2</span>; i &lt; <span class="hljs-number">500</span>; i++) {
            articleIds = <span class="hljs-keyword">await</span> page.evaluate(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                <span class="hljs-keyword">let</span> imgElements = <span class="hljs-built_in">document</span>.querySelectorAll(<span class="hljs-string">".post-title--inline h3 a"</span>);
                imgElements = [...imgElements];
                <span class="hljs-keyword">let</span> articleIds = imgElements.map(<span class="hljs-function"><span class="hljs-params">i</span> =&gt;</span> {
                    <span class="hljs-keyword">return</span> i.getAttribute(<span class="hljs-string">"href"</span>).split(<span class="hljs-string">"-"</span>).pop();
                });
                <span class="hljs-keyword">return</span> articleIds;
            });
    
            <span class="hljs-comment">//TODO save </span>
    }
    </code></pre><p>Chừng đó là chưa đủ ta viết thêm đoạn code cho nó chuyển trang nữa nhé:</p>
    <p>Kéo xuống f12 chỗ cái page để kiếm cái link nà</p>
    <p><img src="https://images.viblo.asia/7024706a-4f10-448a-94a3-ec6a49110b9c.png" alt=""></p>
    <p>code code code...</p>
    <pre><code><span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">2</span>; i &lt; <span class="hljs-number">500</span>; i++) {
            articleIds = <span class="hljs-keyword">await</span> page.evaluate(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                <span class="hljs-keyword">let</span> imgElements = <span class="hljs-built_in">document</span>.querySelectorAll(<span class="hljs-string">".post-title--inline h3 a"</span>);
                imgElements = [...imgElements];
                <span class="hljs-keyword">let</span> articleIds = imgElements.map(<span class="hljs-function"><span class="hljs-params">i</span> =&gt;</span> {
                    <span class="hljs-keyword">return</span> i.getAttribute(<span class="hljs-string">"href"</span>).split(<span class="hljs-string">"-"</span>).pop();
                });
                <span class="hljs-keyword">return</span> articleIds;
            });
    
            <span class="hljs-comment">//TODO save </span>
    
            navigationPromise = page.waitForNavigation();
            <span class="hljs-keyword">await</span> page.click(<span class="hljs-string">".pagination a[href*=\"/?page="</span>+i+<span class="hljs-string">"\"]"</span>);
            <span class="hljs-keyword">await</span> navigationPromise;
    }
    </code></pre><p>waitForNavigation() : đại loại như là chờ tới khi trang chuyển trang xong</p>
    <p>page.click(selector[, options]) : phát sinh sự kiện click cho selector truyền vào <a href="https://github.com/puppeteer/puppeteer/blob/v2.1.1/docs/api.md#pageclickselector-options">document ở đây nhé</a></p>
    <p>Rất đơn giản phải không các bạn :D ta có crawl data với bất kì trang web nào.. bằng cách kết hợp sử dụng puppeteer ta có thể lấy được những thông tin mà api ko trả về luôn :v: </p>
    <p>Bonus thêm api lấy post chi tiết &#39;<a href="https://viblo.asia/api/posts/">https://viblo.asia/api/posts/</a>&#39; + slugPost</p>
    `)
    const state = ContentState.createFromBlockArray(
        tmp.contentBlocks,
        tmp.entityMap,
    );

    const [editorState, setEditorState] = useState(EditorState.createWithContent(state))
    console.log("start editor");
    return (
        <div className="App">
            <header className="App-header">Rich Text Editor Example</header>
            <Editor
                defaultEditorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            />
            <div className="code-view">
                <p>HTML View </p>
                <textarea
                    className="text-area"
                    disabled
                    value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                />
                <textarea
                    className="text-area"
                    disabled
                    value={JSON.stringify(convertToRaw(editorState.getCurrentContent()))}
                />
            </div>
        </div>
    )
};

export default MyEditor;
