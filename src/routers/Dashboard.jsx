import React from 'react'

import { useState,useEffect } from 'react'

import "./Dashboard.css"
import MapaBrasil from "../components/MapaBrasil"

const Dashboard = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Delay to allow the fade-in effect to be noticeable
        const timer = setTimeout(() => setIsLoaded(true), 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='dashboard'>
            <div className='filtro'>
                <p>Todos os anos</p>
                <div className='btn-anos'>
                    <input type="button" value="2024" />
                    <input type="button" value="2023" />
                    <input type="button" value="2022" />
                    <input type="button" value="2021" />
                    <input type="button" value="2020" />
                </div>
                <div className='mapa'>
                    <MapaBrasil></MapaBrasil>
                </div>
            </div>
            <div className='estatisca'>
                <h1>424</h1>
                <p>escolas foram premiadas no período 2023-2018</p>
                <div><span className='color-box' id='box-sudeste'></span><span>140 escolas foram premiadas na região sudeste</span></div>
                <div><span className='color-box' id='box-nordeste'></span><span>140 escolas foram premiadas na região nordeste</span></div>
                <div><span className='color-box' id='box-sul'></span><span>140 escolas foram premiadas na região sul</span></div>
                <div><span className='color-box' id='box-norte'></span><span>140 escolas foram premiadas na região norte</span></div>
                <div><span className='color-box' id='box-centro-oeste'></span><span>140 escolas foram premiadas na região centro-oeste</span></div>
            </div>
            <div className='total'>
                <h1>1080</h1>
                <p>Projetos foram premiados no período de 2023-2018</p>
                <div className='trofeu'>
                    <svg viewBox="0 0 512 512">
                        <path id="path_trofeu" fillRule="evenodd" clipRule="evenodd" d="M43.5931 2.316C41.8741 4.035 40.3431 8.476 37.6471 19.566C32.4831 40.811 30.1441 57.331 28.7791 82.197L27.5881 103.894L22.3451 96.697C19.4611 92.739 14.0891 84.642 10.4081 78.704C1.79205 64.808 0.610054 64.768 0.213054 78.354C-0.587946 105.739 11.5171 136.362 28.8921 150.91C33.6591 154.901 33.7301 155.049 36.4791 166.719C38.0051 173.199 40.3071 181.627 41.5951 185.449C42.8821 189.271 43.8341 192.5 43.7081 192.625C43.3191 193.014 28.7441 181.848 19.7251 174.25C7.63305 164.063 5.08005 164.652 9.04205 176.714C13.6501 190.744 23.1951 207.439 32.5701 217.866C38.7211 224.708 48.0121 231.576 56.7981 235.778C62.6361 238.569 64.4751 240.011 65.9911 242.981C68.3891 247.683 79.5701 265.638 82.1101 268.867C83.1651 270.208 83.8711 271.463 83.6781 271.655C83.1181 272.215 73.0901 268.56 58.4121 262.445C46.6421 257.542 44.6051 256.966 43.3761 258.196C42.1461 259.425 42.4991 260.461 45.9791 265.846C55.2531 280.195 74.6731 296.929 90.1131 303.874C97.3431 307.127 108.029 310 112.896 310C115.627 310 117.787 311.502 126.061 319.155C137.019 329.291 151.787 340.883 162.5 347.757C166.35 350.228 169.6 352.33 169.722 352.429C169.843 352.529 168.861 355.708 167.538 359.494C163.457 371.173 153.643 370 255.453 370C304.064 370 344.548 369.727 345.418 369.393C347.546 368.576 347.41 365.099 345.001 358.761C343.901 355.867 343.001 353.157 343.001 352.738C343 352.318 345.587 350.33 348.75 348.318C360.665 340.741 384.193 321.769 392.437 313.091C394.629 310.785 396.262 310 398.873 310C403.95 310 414.53 307.184 421.887 303.874C437.327 296.929 456.747 280.195 466.021 265.846C469.501 260.461 469.854 259.425 468.624 258.196C467.395 256.966 465.358 257.542 453.588 262.445C438.91 268.56 428.882 272.215 428.322 271.655C428.129 271.463 428.835 270.208 429.89 268.867C432.43 265.638 443.611 247.683 446.009 242.981C447.525 240.011 449.364 238.569 455.202 235.778C463.988 231.576 473.279 224.708 479.43 217.866C488.805 207.439 498.35 190.744 502.958 176.714C506.92 164.652 504.367 164.063 492.275 174.25C483.857 181.341 468.686 193.026 468.35 192.676C468.256 192.579 469.206 189.35 470.46 185.5C471.714 181.65 473.99 173.199 475.518 166.719C478.269 155.051 478.342 154.9 483.108 150.91C495.611 140.441 506.797 119.078 510.025 99.5C510.66 95.65 511.589 91.719 512.09 90.764C512.59 89.809 513 84.394 513 78.732C513 68.589 512.964 68.433 510.602 68.238C508.562 68.069 507.211 69.641 501.552 78.77C497.893 84.671 492.539 92.739 489.655 96.697L484.412 103.894L483.221 82.197C481.856 57.331 479.517 40.811 474.353 19.566C470.386 3.25 468.531 0 463.18 0C458.862 0 454.999 3.459 455.003 7.323C455.004 9.07 456.375 15.9 458.048 22.5C461.277 35.231 465.406 57.927 464.634 58.699C464.381 58.952 460.872 56.053 456.837 52.257C447.487 43.46 436.228 34 435.109 34C434.634 34 433.72 34.633 433.078 35.406C432.166 36.505 432.791 39.517 435.938 49.191C441.062 64.938 451.891 86.863 460.392 98.701C465.775 106.197 466.998 108.607 466.99 111.701C466.975 117.755 464.082 142.031 463.185 143.635C462.575 144.723 461.673 143.815 459.624 140.051C458.115 137.277 453.764 130.281 449.957 124.504C444.998 116.981 442.467 114 441.036 114C437.923 114 437.531 117.907 438.829 136C440.199 155.107 442.539 167.388 447.538 181.706L451.102 191.912L448.042 199.554C442.838 212.551 436.709 225.114 435.976 224.288C435.592 223.854 434.288 219.45 433.08 214.5C428.631 196.271 426.035 189 423.975 189C421.419 189 420.64 190.701 417.074 204.069C412.512 221.166 410.954 233.369 411.082 250.988L411.194 266.477L405.404 273.832C402.22 277.877 396.835 284.179 393.439 287.835L387.263 294.484L387.381 274.992C387.496 256.127 387.436 255.5 385.5 255.5C384.104 255.5 381.779 258.066 377.801 264C366.78 280.439 357.906 299.939 353.537 317.317L351.229 326.5L344.364 331.232C337.17 336.192 336 336.705 336 334.901C336 334.297 335.274 332.272 334.386 330.401L332.772 327H316.5H300.228L296.251 320.25C291.406 312.028 285.203 298.247 281.531 287.544C278.595 278.987 273.51 257.523 272.507 249.451L271.891 244.5L275.939 242.671C280.164 240.762 294.791 229.126 296.255 226.509C296.878 225.396 298.873 225 303.866 225C338.388 225 372.639 201.487 387.185 167.803C393.139 154.015 395 142.641 395 120.043C395 90.7 396.644 92 359.55 92H333V86.5V81H336.8C338.89 81 341.14 80.46 341.8 79.8C342.595 79.005 343 74.689 343 67C343 59.311 342.595 54.995 341.8 54.2C340.061 52.461 171.939 52.461 170.2 54.2C168.545 55.855 168.545 78.145 170.2 79.8C170.86 80.46 173.11 81 175.2 81H179V86.5V92H152.45C115.356 92 117 90.7 117 120.043C117 135.341 117.408 141.186 119.03 149.146C124.868 177.793 143.668 202.415 169.5 215.243C182.382 221.64 195.684 225 208.127 225C213.717 225 215.125 225.341 216.266 226.969C218.419 230.043 232.087 240.871 236.224 242.781C240.72 244.856 240.726 244.936 237.525 260.319C232.655 283.727 225.568 303.565 216.653 318.75L211.81 327H195.849H179.888L177.897 331.5C176.802 333.975 175.59 335.992 175.203 335.982C174.816 335.973 171.411 333.835 167.636 331.232L160.771 326.5L158.463 317.317C154.094 299.939 145.22 280.439 134.199 264C130.221 258.066 127.896 255.5 126.5 255.5C124.564 255.5 124.504 256.127 124.619 274.992L124.737 294.484L118.561 287.835C115.165 284.179 109.78 277.877 106.596 273.832L100.806 266.477L100.918 250.988C101.046 233.369 99.4881 221.166 94.9261 204.069C91.3601 190.701 90.5811 189 88.0251 189C85.9651 189 83.3691 196.271 78.9201 214.5C77.7121 219.45 76.4081 223.854 76.0241 224.288C75.2911 225.114 69.1621 212.551 63.9581 199.554L60.8981 191.912L64.4621 181.706C69.4611 167.388 71.8011 155.107 73.1711 136C74.4691 117.907 74.0771 114 70.9641 114C69.5331 114 67.0021 116.981 62.0431 124.504C58.2361 130.281 53.8851 137.277 52.3761 140.051C50.3271 143.815 49.4251 144.723 48.8151 143.635C47.9181 142.031 45.0251 117.755 45.0101 111.701C45.0021 108.607 46.2251 106.197 51.6081 98.701C60.1091 86.863 70.938 64.938 76.062 49.191C79.209 39.517 79.8341 36.505 78.9221 35.406C78.2801 34.633 77.3661 34 76.8911 34C75.7721 34 64.5131 43.46 55.1631 52.257C51.1281 56.053 47.6191 58.952 47.3661 58.699C46.5941 57.927 50.7231 35.231 53.9521 22.5C57.7611 7.479 57.8151 4.786 54.3651 2.073C50.8671 -0.679002 46.4901 -0.579998 43.5931 2.316ZM0.378054 80C0.378054 86.325 0.541054 88.912 0.739054 85.75C0.937054 82.588 0.937054 77.412 0.739054 74.25C0.541054 71.088 0.378054 73.675 0.378054 80ZM133 119.928C133 147.064 138.037 163.171 151.971 180.59C160.894 191.745 176.881 202.076 191.333 206.026C195.641 207.203 199.338 207.995 199.548 207.785C199.758 207.575 198.31 204.725 196.331 201.452C191.912 194.142 187.037 182.876 184.139 173.278C180.481 161.159 179.012 147.988 179.006 127.25L179 108H156H133V119.928ZM332.994 127.25C332.984 160.576 328.341 180.101 315.042 202.75C313.347 205.637 312.315 208 312.75 208C313.185 208 316.906 207.072 321.02 205.938C335.176 202.037 351.205 191.622 360.029 180.59C373.963 163.171 379 147.064 379 119.928V108H356H333L332.994 127.25Z" fill="black" />
                    </svg>
                </div>
            </div>
            <div className='classificacao'>
                <p>testo</p>
                <p>testo</p>
                <p>testo</p>
                <p>testo</p>
                <p>testo</p>
            </div>
        </div>
    )
}

export default Dashboard