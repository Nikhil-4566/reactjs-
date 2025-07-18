export default function Study() {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>:brain: useState Ka Har Ek Word Ka Matlab</h2>
            <ul>
                <li><strong>useState</strong> – React ka ek hook hai jo component ke andar state (yaani data) ko manage karta hai.</li>
                <li><strong>[ ] (square brackets)</strong> – JavaScript ka array destructuring syntax hai. Isse hum do cheezein nikaalte hain: value aur usse change karne wala function.</li>
                <li><strong>count</strong> – Ye variable hai jisme value store hoti hai (initially 0). Aap koi bhi naam de sakte ho.</li>
                <li><strong>setCount</strong> – Ye function hai jo `count` ki value ko update karta hai.</li>
                <li><strong>=</strong> – JavaScript mein assignment operator hai, jo value assign karta hai.</li>
                <li><strong>useState(0)</strong> – Ye hook ko call kar raha hai aur initial value `0` set kar raha hai.</li>
                <li><strong>()</strong> – Ye function ko call karne ke liye hota hai. Yaha pe useState ko 0 ke saath call kiya gaya hai.</li>
            </ul>
            <h3>:dart: Example:</h3>
            <pre style={{ background: '#F4F4F4', padding: '10px' }}>
                {`const [count, setCount] = useState(0);`}
            </pre>
            <p>
                :point_right: Yani humne ek value <strong>count</strong> banayi jiska starting value 0 hai.<br />
                Aur ek function <strong>setCount</strong> banaya jisse hum <strong>count</strong> ko change kar sakte hain.
            </p>
        </div>
    )
}