import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function investors() {
  return (
    <div>
        <Nav/>
        <div className='grid grid-flow-row md:grid-flow-col py-20 justify-center'>
            <div>
              <form>
                <h1 className='font-garamond text-xl md:text-4xl'>Login</h1>
                <label className='font-montserrat'>Username</label>
                <br/>
                <input type="text" className='bg-[#7BE0B0] rounded-lg md:text-xl p-2 active:text-[#12445B] border-none' placeholder='Enter Your Username'/>
                <br/>
                <label className='font-montserrat'>Password</label>
                <br/>
                <input type="password" className='bg-[#7BE0B0] opacity-50 rounded-lg md:text-xl p-2'placeholder='Enter Your Password'/>
                <div>
                  <button>submit</button>
                </div>
              </form>
                
            </div>
            <div className=''>
                <svg width="auto" height="auto" viewBox="0 0 613 369" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_97_35)">
                <path d="M38.5607 77.6354C30.9341 77.6354 23.4788 75.3734 17.1375 71.1355C10.7963 66.8977 5.85384 60.8742 2.93527 53.8269C0.0167078 46.7796 -0.746923 39.0249 0.74095 31.5435C2.22882 24.0621 5.90138 17.19 11.2942 11.7962C16.687 6.40241 23.5579 2.7292 31.0379 1.24105C38.5179 -0.247089 46.2712 0.51668 53.3172 3.43578C60.3633 6.35487 66.3857 11.2982 70.6228 17.6406C74.8599 23.983 77.1214 31.4397 77.1214 39.0677C77.1098 49.2929 73.0435 59.096 65.8145 66.3264C58.5854 73.5567 48.7841 77.6238 38.5607 77.6354ZM38.5607 2.10698C31.2519 2.10698 24.1072 4.27468 18.0302 8.33598C11.9531 12.3973 7.21663 18.1697 4.41967 24.9234C1.62271 31.6771 0.890902 39.1087 2.31678 46.2783C3.74266 53.448 7.26218 60.0338 12.4303 65.2028C17.5984 70.3719 24.183 73.892 31.3513 75.3182C38.5197 76.7443 45.9499 76.0124 52.7024 73.2149C59.4549 70.4174 65.2263 65.6801 69.2868 59.6019C73.3474 53.5238 75.5147 46.3778 75.5147 39.0677C75.5036 29.2685 71.6067 19.8739 64.6789 12.9448C57.7511 6.01571 48.3581 2.11808 38.5607 2.10698V2.10698Z" fill="#F2F2F2"/>
                <path d="M300.452 55.1375C296.639 55.1375 292.911 54.0066 289.74 51.8876C286.57 49.7687 284.099 46.757 282.639 43.2333C281.18 39.7096 280.798 35.8323 281.542 32.0916C282.286 28.3509 284.122 24.9149 286.819 22.218C289.515 19.5211 292.951 17.6845 296.691 16.9404C300.431 16.1963 304.307 16.5782 307.83 18.0378C311.353 19.4973 314.364 21.969 316.483 25.1402C318.602 28.3114 319.732 32.0397 319.732 35.8537C319.727 40.9663 317.693 45.8679 314.079 49.483C310.464 53.0982 305.564 55.1317 300.452 55.1375V55.1375ZM300.452 18.1769C296.956 18.1769 293.539 19.2136 290.633 21.1559C287.727 23.0983 285.461 25.859 284.124 29.0891C282.786 32.3191 282.436 35.8733 283.118 39.3023C283.8 42.7313 285.483 45.881 287.955 48.3531C290.427 50.8253 293.576 52.5088 297.004 53.1909C300.432 53.873 303.986 53.5229 307.215 52.185C310.445 50.8471 313.205 48.5814 315.147 45.6744C317.089 42.7675 318.126 39.3499 318.126 35.8537C318.12 31.1671 316.257 26.674 312.943 23.3601C309.63 20.0462 305.138 18.1821 300.452 18.1769Z" fill="#F2F2F2"/>
                <path d="M436.218 149.146C431.928 149.146 427.734 147.874 424.167 145.49C420.6 143.106 417.82 139.718 416.178 135.754C414.537 131.79 414.107 127.428 414.944 123.22C415.781 119.011 417.847 115.146 420.88 112.112C423.914 109.078 427.779 107.012 431.986 106.175C436.194 105.337 440.555 105.767 444.518 107.409C448.482 109.051 451.869 111.832 454.253 115.399C456.636 118.967 457.908 123.161 457.908 127.452C457.902 133.204 455.614 138.718 451.548 142.785C447.482 146.852 441.968 149.14 436.218 149.146V149.146ZM436.218 107.365C432.246 107.365 428.363 108.543 425.06 110.75C421.757 112.957 419.183 116.094 417.663 119.765C416.143 123.435 415.745 127.474 416.52 131.371C417.295 135.267 419.208 138.847 422.016 141.656C424.825 144.465 428.404 146.378 432.3 147.153C436.195 147.928 440.234 147.531 443.903 146.01C447.573 144.49 450.71 141.915 452.917 138.612C455.124 135.309 456.301 131.425 456.301 127.452C456.295 122.126 454.178 117.021 450.412 113.255C446.647 109.489 441.542 107.371 436.218 107.365V107.365Z" fill="#F2F2F2"/>
                <path d="M612.197 368.5H431.443C431.23 368.5 431.026 368.415 430.875 368.265C430.725 368.114 430.64 367.91 430.64 367.696C430.64 367.483 430.725 367.279 430.875 367.128C431.026 366.978 431.23 366.893 431.443 366.893H612.197C612.41 366.893 612.614 366.978 612.765 367.128C612.915 367.279 613 367.483 613 367.696C613 367.91 612.915 368.114 612.765 368.265C612.614 368.415 612.41 368.5 612.197 368.5Z" fill="#CCCCCC"/>
                <path d="M514.879 123.633C525.776 123.633 534.61 114.797 534.61 103.898C534.61 92.9991 525.776 84.1636 514.879 84.1636C503.982 84.1636 495.148 92.9991 495.148 103.898C495.148 114.797 503.982 123.633 514.879 123.633Z" fill="#FFB8B8"/>
                <path d="M516.926 338.243L507.601 341.41L490.945 306.941L504.709 302.266L516.926 338.243Z" fill="#FFB8B8"/>
                <path d="M500.035 341.009L518.02 334.899L521.866 346.225L492.557 356.181C492.052 354.694 491.845 353.122 491.947 351.554C492.05 349.987 492.46 348.455 493.154 347.046C493.848 345.637 494.813 344.379 495.994 343.343C497.175 342.307 498.548 341.514 500.035 341.009V341.009Z" fill="#2F2E41"/>
                <path d="M537.997 357.713L528.161 358.207L521.573 320.495L536.091 319.765L537.997 357.713Z" fill="#FFB8B8"/>
                <path d="M520.994 355.75L539.964 354.796L540.564 366.742L509.65 368.296C509.571 366.727 509.802 365.158 510.329 363.679C510.856 362.199 511.67 360.838 512.724 359.673C513.777 358.508 515.049 357.562 516.468 356.889C517.887 356.215 519.425 355.828 520.994 355.75V355.75Z" fill="#2F2E41"/>
                <path d="M479.461 232.412C480.343 231.627 481.042 230.657 481.509 229.573C481.976 228.488 482.2 227.313 482.164 226.133C482.128 224.952 481.834 223.794 481.302 222.739C480.77 221.684 480.013 220.759 479.085 220.029L488.464 192.891L474.01 196.586L467.32 221.789C466.197 223.43 465.714 225.426 465.963 227.399C466.212 229.372 467.177 231.185 468.673 232.494C470.17 233.804 472.094 234.519 474.083 234.503C476.071 234.488 477.985 233.744 479.461 232.412Z" fill="#FFB8B8"/>
                <path d="M537.078 346.343C536.951 346.343 536.824 346.336 536.697 346.322L523.345 344.908C522.525 344.826 521.758 344.463 521.173 343.882C520.588 343.3 520.221 342.536 520.133 341.716L509.814 249.708L502.348 274.885L516.269 324.367C516.41 324.871 516.441 325.399 516.359 325.916C516.276 326.433 516.082 326.926 515.791 327.361C515.499 327.795 515.116 328.162 514.669 328.434C514.222 328.706 513.722 328.878 513.202 328.938L499.667 330.494C498.805 330.589 497.938 330.373 497.221 329.885C496.505 329.396 495.986 328.668 495.76 327.83L480.972 272.146C480.85 271.688 480.819 271.211 480.882 270.741L487.529 220.765L537.107 224.741L540.692 342.616C540.706 343.1 540.624 343.582 540.449 344.034C540.274 344.485 540.01 344.897 539.673 345.244C539.336 345.592 538.933 345.868 538.487 346.057C538.041 346.246 537.562 346.343 537.078 346.343V346.343Z" fill="#2F2E41"/>
                <path d="M519.94 233.287C503.33 233.287 484.525 226.868 483.386 226.474L483.057 226.36L501.794 130.194L502.139 130.208C509.565 130.51 529.83 130.664 530.034 130.666L530.398 130.669L538.208 215.533L539.604 227.946L539.433 228.084C534.655 231.948 527.527 233.287 519.94 233.287Z" fill="#7BE0B0"/>
                <path d="M489.933 224.976L478.213 220.255L484.186 147.985C484.33 146.204 484.872 144.477 485.772 142.933C486.672 141.389 487.908 140.066 489.387 139.064L495.555 134.866C495.38 134.272 495.349 133.646 495.463 133.038C495.578 132.43 495.835 131.858 496.213 131.368C496.592 130.879 497.081 130.487 497.641 130.223C498.2 129.959 498.814 129.832 499.433 129.852L501.199 129.909C501.535 129.683 501.931 129.563 502.336 129.566C502.741 129.569 503.136 129.694 503.468 129.925C503.801 130.157 504.055 130.483 504.199 130.861C504.343 131.24 504.369 131.653 504.274 132.047L503.886 139.704L489.933 224.976Z" fill="#2F2E41"/>
                <path d="M484.019 212.02L468.716 211.376L473.673 179.483L477.781 149.474C477.862 148.396 478.185 147.351 478.727 146.416C479.268 145.481 480.014 144.68 480.909 144.074C481.803 143.468 482.823 143.072 483.892 142.915C484.961 142.758 486.051 142.846 487.082 143.17V143.17C488.687 143.674 490.064 144.726 490.971 146.144C491.878 147.561 492.257 149.252 492.042 150.921L487.881 183.436L484.019 212.02Z" fill="#2F2E41"/>
                <path d="M508.25 226.082L508.146 225.759C508.075 225.539 501.178 203.413 512.718 177.01L518.504 148.224L523.449 130.15C523.542 129.827 523.709 129.53 523.936 129.283C524.164 129.035 524.446 128.844 524.76 128.725C525.129 128.597 525.528 128.581 525.906 128.678C526.285 128.776 526.626 128.982 526.888 129.272V129.272C530.335 128.26 534.04 128.631 537.218 130.305L544.163 133.964C545.707 134.778 546.938 136.081 547.662 137.669C548.386 139.257 548.563 141.041 548.165 142.741L538.673 183.255L543.287 221.097L508.25 226.082Z" fill="#2F2E41"/>
                <path d="M518.356 210.483C519.53 210.611 520.718 210.479 521.836 210.098C522.953 209.717 523.974 209.095 524.825 208.276C525.677 207.458 526.339 206.463 526.764 205.361C527.189 204.259 527.368 203.077 527.287 201.899L548.782 185.973L541.268 182.41L518.091 194.351C516.12 194.618 514.316 195.599 513.02 197.107C511.724 198.615 511.027 200.547 511.059 202.535C511.092 204.524 511.853 206.431 513.198 207.896C514.542 209.361 516.378 210.281 518.356 210.483V210.483Z" fill="#FFB8B8"/>
                <path d="M531.832 203.354L524.572 189.8L542.476 178.014L533.739 146.67C533.389 145.415 533.302 144.102 533.482 142.811C533.663 141.521 534.107 140.282 534.788 139.171C535.468 138.06 536.371 137.102 537.439 136.356C538.506 135.609 539.716 135.091 540.993 134.834V134.834C543.25 134.384 545.593 134.768 547.587 135.916C549.582 137.063 551.092 138.895 551.838 141.072L563.627 175.731C563.87 176.445 563.884 177.217 563.666 177.94C563.448 178.662 563.01 179.298 562.413 179.759L531.832 203.354Z" fill="#2F2E41"/>
                <path d="M516.275 108.084C513.91 108.392 512.126 105.971 511.299 103.734C510.471 101.496 509.84 98.8916 507.784 97.683C504.975 96.0318 501.38 98.0177 498.167 97.4729C494.539 96.8577 492.18 93.0117 491.995 89.3357C491.81 85.6596 493.273 82.124 494.708 78.7347L495.209 82.9468C495.142 81.5192 495.442 80.0983 496.081 78.82C496.72 77.5417 497.676 76.4487 498.858 75.6457L498.213 81.8263C498.35 80.9736 498.654 80.1564 499.108 79.4217C499.562 78.6869 500.157 78.0491 500.858 77.5448C501.559 77.0404 502.353 76.6795 503.194 76.4828C504.035 76.286 504.906 76.2573 505.758 76.3983L505.656 80.0809C509.847 79.5825 514.074 79.0834 518.277 79.4631C522.48 79.8428 526.713 81.1729 529.898 83.9415C534.663 88.0828 536.404 94.9019 535.819 101.189C535.235 107.476 532.641 113.381 529.936 119.087C529.256 120.522 528.315 122.142 526.737 122.325C525.319 122.489 524.022 121.304 523.582 119.946C523.242 118.553 523.255 117.098 523.62 115.711C524.019 113.592 524.521 111.426 524.146 109.303C523.771 107.179 522.244 105.081 520.104 104.821C517.964 104.56 515.774 107.007 516.803 108.902L516.275 108.084Z" fill="#2F2E41"/>
                <path d="M258.007 324.856L250.374 321.612L245.137 283H175.402L169.726 321.455L162.896 324.9C162.57 325.065 162.308 325.336 162.153 325.67C161.998 326.004 161.959 326.381 162.043 326.74C162.127 327.098 162.329 327.418 162.615 327.647C162.902 327.876 163.256 328 163.622 328H257.378C257.753 328 258.116 327.869 258.405 327.63C258.695 327.391 258.894 327.058 258.968 326.688C259.042 326.317 258.987 325.932 258.812 325.599C258.637 325.265 258.352 325.002 258.007 324.856V324.856Z" fill="#E6E6E6"/>
                <path d="M383.173 288H37.8266C36.0147 287.996 34.2784 287.28 32.9986 286.01C31.7188 284.74 31 283.019 31 281.225V233H390V281.225C390 283.019 389.281 284.74 388.001 286.01C386.722 287.28 384.985 287.996 383.173 288V288Z" fill="#CCCCCC"/>
                <path d="M390 256H31V47.2624C31.0025 45.0718 31.8707 42.9716 33.4141 41.4227C34.9575 39.8737 37.05 39.0024 39.2326 39H381.767C383.95 39.0025 386.043 39.8738 387.586 41.4227C389.129 42.9716 389.997 45.0718 390 47.2624V256Z" fill="#3F3D56"/>
                <path d="M368.544 240.588H52.4557C50.7732 240.586 49.1601 239.917 47.9704 238.727C46.7806 237.537 46.1114 235.924 46.1095 234.241V60.8974C46.1114 59.2145 46.7806 57.6011 47.9703 56.4111C49.16 55.2211 50.7731 54.5518 52.4557 54.5498H368.544C370.227 54.5518 371.84 55.2211 373.03 56.4111C374.219 57.6011 374.888 59.2145 374.89 60.8974V234.241C374.888 235.924 374.219 237.537 373.029 238.727C371.84 239.917 370.227 240.586 368.544 240.588Z" fill="white"/>
                <path d="M365.569 328.31H59.4935C59.2805 328.31 59.0761 328.225 58.9255 328.074C58.7748 327.924 58.6902 327.719 58.6902 327.506C58.6902 327.293 58.7748 327.089 58.9255 326.938C59.0761 326.787 59.2805 326.703 59.4935 326.703H365.569C365.782 326.703 365.986 326.787 366.137 326.938C366.288 327.089 366.372 327.293 366.372 327.506C366.372 327.719 366.288 327.924 366.137 328.074C365.986 328.225 365.782 328.31 365.569 328.31Z" fill="#CCCCCC"/>
                <path d="M339.194 219H81.8055C81.5919 219 81.387 218.915 81.2359 218.764C81.0849 218.613 81 218.408 81 218.194V94.8057C81 94.592 81.0849 94.3871 81.2359 94.236C81.387 94.0849 81.5919 94 81.8055 94C82.0191 94 82.224 94.0849 82.3751 94.236C82.5261 94.3871 82.611 94.592 82.611 94.8057V217.389H339.194C339.408 217.389 339.613 217.474 339.764 217.625C339.915 217.776 340 217.981 340 218.194C340 218.408 339.915 218.613 339.764 218.764C339.613 218.915 339.408 219 339.194 219Z" fill="#3F3D56"/>
                <path d="M136.625 210H113.375C112.745 209.999 112.142 209.748 111.696 209.3C111.251 208.852 111.001 208.245 111 207.612V175.388C111.001 174.755 111.251 174.148 111.696 173.7C112.142 173.252 112.745 173.001 113.375 173H136.625C137.255 173.001 137.858 173.252 138.304 173.7C138.749 174.148 138.999 174.755 139 175.388V207.612C138.999 208.245 138.749 208.852 138.304 209.3C137.858 209.748 137.255 209.999 136.625 210V210Z" fill="#7BE0B0"/>
                <path d="M179.625 210H156.375C155.745 209.999 155.142 209.75 154.696 209.306C154.251 208.862 154.001 208.26 154 207.632V145.368C154.001 144.74 154.251 144.138 154.696 143.694C155.142 143.25 155.745 143.001 156.375 143H179.625C180.255 143.001 180.858 143.25 181.304 143.694C181.749 144.138 181.999 144.74 182 145.368V207.632C181.999 208.26 181.749 208.862 181.304 209.306C180.858 209.75 180.255 209.999 179.625 210V210Z" fill="#7BE0B0"/>
                <path d="M222.54 210H198.46C197.808 209.999 197.182 209.748 196.721 209.3C196.26 208.852 196.001 208.245 196 207.612V175.388C196.001 174.755 196.26 174.148 196.721 173.7C197.182 173.252 197.808 173.001 198.46 173H222.54C223.192 173.001 223.818 173.252 224.279 173.7C224.74 174.148 224.999 174.755 225 175.388V207.612C224.999 208.245 224.74 208.852 224.279 209.3C223.818 209.748 223.192 209.999 222.54 210V210Z" fill="#7BE0B0"/>
                <path d="M264.625 209.999H241.375C240.76 210.013 240.164 209.782 239.719 209.358C239.274 208.934 239.015 208.352 239 207.738V133.262C239.015 132.648 239.274 132.066 239.719 131.642C240.164 131.218 240.76 130.987 241.375 131.001H264.625C265.24 130.987 265.836 131.218 266.281 131.642C266.726 132.066 266.985 132.648 267 133.262V207.738C266.985 208.352 266.726 208.934 266.281 209.358C265.836 209.782 265.24 210.013 264.625 209.999V209.999Z" fill="#7BE0B0"/>
                <path d="M307.625 210H284.375C283.745 209.999 283.142 209.748 282.696 209.302C282.251 208.856 282.001 208.252 282 207.621V111.379C282.001 110.748 282.251 110.144 282.696 109.698C283.142 109.252 283.745 109.001 284.375 109H307.625C308.255 109.001 308.858 109.252 309.304 109.698C309.749 110.144 309.999 110.748 310 111.379V207.621C309.999 208.252 309.749 208.856 309.304 209.302C308.858 209.748 308.255 209.999 307.625 210V210Z" fill="#7BE0B0"/>
                <path d="M125 164C127.761 164 130 161.761 130 159C130 156.239 127.761 154 125 154C122.239 154 120 156.239 120 159C120 161.761 122.239 164 125 164Z" fill="#3F3D56"/>
                <path d="M168 132C170.761 132 173 129.985 173 127.5C173 125.015 170.761 123 168 123C165.239 123 163 125.015 163 127.5C163 129.985 165.239 132 168 132Z" fill="#3F3D56"/>
                <path d="M210.5 164C212.985 164 215 161.761 215 159C215 156.239 212.985 154 210.5 154C208.015 154 206 156.239 206 159C206 161.761 208.015 164 210.5 164Z" fill="#3F3D56"/>
                <path d="M253 117C255.761 117 258 114.761 258 112C258 109.239 255.761 107 253 107C250.239 107 248 109.239 248 112C248 114.761 250.239 117 253 117Z" fill="#3F3D56"/>
                <path d="M295.5 99C297.985 99 300 96.9853 300 94.5C300 92.0147 297.985 90 295.5 90C293.015 90 291 92.0147 291 94.5C291 96.9853 293.015 99 295.5 99Z" fill="#3F3D56"/>
                <path d="M210.692 160L168.036 127.826L125.964 159.56L125 158.266L168.036 125.805L210.49 157.827L252.676 111.336L252.845 111.266L295.399 94L296 95.4999L253.615 112.697L210.692 160Z" fill="#3F3D56"/>
                </g>
                <defs>
                <clipPath id="clip0_97_35">
                <rect width="613" height="368" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
                </defs>
                </svg>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default investors