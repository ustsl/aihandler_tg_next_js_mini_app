'use client'

import React from "react";
import Script from "next/script"
import { YMCOUNTER } from "@/const";

interface IScriptBlock {
    gtmList?: string;
}

export const ScriptsBlock = ({ gtmList }: IScriptBlock) => {

    const gtmCodes = gtmList?.split(',').map(code => code.trim());


    return (
        <>
            <Script src="https://telegram.org/js/telegram-web-app.js" />
            {gtmCodes && gtmCodes.map((code, index) => (
                <React.Fragment key={index}>
                    <Script src={`https://www.googletagmanager.com/gtag/js?id=${code}`} />
                    <Script id={`google-analytics-${code}`}>
                        {`
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', '${code}');
                        `}
                    </Script>
                </React.Fragment>
            ))}

            <script type="text/javascript" dangerouslySetInnerHTML={{
                __html: `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(${YMCOUNTER}, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:false
        });
      `}} />
        </>
    )
}
