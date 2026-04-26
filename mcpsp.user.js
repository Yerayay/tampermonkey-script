// ==UserScript==
// @name         Tema Eklentisi: www.mcpsp.com 
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  mcpsp.com sitesine tema fonksiyonu ekler ve çeşitli düzenlenlemeler uygular. (Geliştiriliyor...)
// @author       Yerayay
// @match        *://mcpsp.com/*
// @match        *://*.mcpsp.com/*
// @run-at       document-start
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mcpsp.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function Koyumod() {
        if (localStorage.getItem("tema") === "light") return;

        const style = document.createElement("style");
        style.id = "dark-style"; 
        style.innerHTML = `
            html, body {
                background-color: #121212 !important;
            }

            .p-pageWrapper,
            .p-body,
            .p-body-inner {
                background-color: #050505 !important;
            }

            .block,
            .block-container {
                background-color: #1e1e1e !important;
            }
            
            .p-header{
                background-color: #1b2c45 !important;
            }
            .p-footer,
            .ZenFooterDuyuruBG,
            .ZenFooterBlok * {
                background-color: #1b2c45 !important;
            }
            .ZenFooterGovde,
            .ZenAltFooterBg{
                background-color: #1d3252 !important;
            }
            .p-navSticky p-navSticky--primary,
            .p-nav,
            .p-nav-inner{
                background-color: #1b2c45 !important;
                color: #bdbdbd !important;
            }
            .p-navEl{
                color: #bdbdbd  !important;
            }
            .p-sectionLinks,
            .p-sectionLinks-inner hScroller{
                background-color: #050505 !important;
            }
            .hScroller-scroll is-calculated{
                background-color: #1e1e1e !important;
            }
            .p-navEl is-selected{
                background-color: #1e1e1e !important;
            }
            .p-title-value{
                color: #fafafa !important;
            }
            
            .p-title{
                color: #fafafa !important;
            }
            .block-container{
                border: 1px solid #363636 !important;
            }
            .block-tabHeader block-tabHeader--memberTabs tabs hScroller,
            .hScroller-scroll is-calculated{
                background-color: #1b2c45 !important;
            }
            .block-container{
                color: #fafafa !important;
            }
            .memberHeader-main{
                background-color: #1b2c45 !important;
            }
            .message{
                background-color: #1e1e1e !important;
            }
            .message,
            .message-body,
            .message-content {
                color: #fafafa !important;
            }
            .message-cell,
            .message-main,
            .bbWrapper {
                color: #ffffff !important;
            }
            .message-cell--user{
                background-color: #050505 !important;
            }
           
            .pageNav-main{
                background-color: transparent !important;
                
            }
            .XGT-istatistik-satir{
                background-color: #1e1e1e !important;
                border: none !important;
                box-shadow: 0 0 0 0.5px #444;
            }
            .block.xgtResimliOnecikanlar{
                background-color: #1e1e1e !important;
                border: transparent !important;
                box-shadow: 0 0 0 0.5px #444;

            }
            .tabPanes,
            .tabPanes * {
                border: none !important;
                
            }
            .tooltip-content{
                background-color: #1e1e1e !important;
                border: 1px solid #363636 !important;
            }
            .tooltip-arrow{
                color: #1b2c45 !important;
                background-color: #1b2c45 !important;
            }
            .bbCodeBlock-content{
                background-color: #2e2e2e !important;
                border: none !important;
            }
            .bbCodeBlock bbCodeBlock--hide bbCodeBlock--visible{
                border: none !important;
                box-shadow: 0 0 0 0.5px #444 !important;
            }
            .benzer-konular-resimli resimli-mobil,
            .block benzerkonular-mobil,
            .benzer-konular-resimli resimli-mobil * {
                background-color: #1e1e1e !important;
            }
            #tema-toggle {
                background: transparent !important;
            }
            
            #tema-toggle:hover {
                background: transparent !important;
            }
            .fr-toolbar,
            .fr-box,
            .fr-wrapper,
            .fr-element,
            .fr-second-toolbar {
            background-color: #1b1b1b !important;
            border-color: #333 !important;
            }
            .fr-toolbar button,
            .fr-toolbar .fr-btn,
            .fr-toolbar i {
            color: #2577b1 !important;
            }
            .fr-toolbar button:hover,
            .fr-toolbar .fr-btn:hover {
                background-color: #2a2a2a !important;
                }
            .fr-toolbar button::after,
            .fr-toolbar .fr-btn::after {
                background-color: #2a2a2a !important;
            }
            .fr-element {
            background-color: #121212 !important;
            color: #eaeaea !important;
            }
            .blockLink:hover,
            .blockLink:hover * {
                background-color: #1b2c45 !important;
                color: #5895ed !important;
            .bbbWrapper,
            .bbWrapper * {
                background-color: #1b2c45 !important;
            }
            .memberOverviewBlock-seeMore,
            .memberOverviewBlock-seeMore::before,
            .memberOverviewBlock-seeMore::after,
            a.memberOverviewBlock-seeMore {
            background: #050505 !important;
            background-image: none !important;
            border-color: #050505 !important;
            box-shadow: none !important;
            }
    
        `;
        document.head.appendChild(style);
    }
    


    Koyumod();
    


    
    function TemaButonuEkle() {
        if (document.getElementById("tema-toggle")) return true;
    
        const hedef =
            document.querySelector(".p-navgroup-link--search") ||
            document.querySelector('[data-xf-click="search"]') ||
            document.querySelector(".p-navgroup.p-discovery") ||
            document.querySelector(".p-navgroup");
    
        if (!hedef) return false;
    
        const btn = document.createElement("button");
        btn.id = "tema-toggle";
        btn.type = "button";
    
        function guncelleIcon() {
            const dark = localStorage.getItem("tema") === "dark";
            btn.textContent = dark ? "☀️" : "🌙";
            btn.title = dark ? "Açık Mod" : "Koyu Mod";
        }
    
        btn.style.cssText = `
        margin-left: 8px;
        padding: 10px 10px;
        cursor: pointer;
        border-radius: 6px;
        border: 0px solid #444;
        background: transparent;
        color: #fff;
        font-size: 16px;
        line-height: 1;
        transition: transform 0.15s ease;
        `;
    
        btn.addEventListener("click", () => {
            const current = localStorage.getItem("tema") || "dark";
            localStorage.setItem("tema", current === "dark" ? "light" : "dark");
            btn.style.transform = "scale(0.8)";
            setTimeout(() => {
            btn.style.transform = "scale(1)";
            }, 0);
            guncelleIcon();
            setTimeout(function(){
                LogoDegistir();
            },1000)
            
            location.reload();
        });
    
        guncelleIcon();
        hedef.insertAdjacentElement("afterend", btn);
        return true;
    
    }
    
    const temaBtnTimer = setInterval(() => {
        if (TemaButonuEkle()) clearInterval(temaBtnTimer);
    }, 300);
    
    const o = new MutationObserver((_, obs) => {if (TemaButonuEkle()) obs.disconnect();});
    
    

    function LogoDegistir() {
        const logo = document.querySelector(".p-header-logo img");
        if (!logo) return;
    
        const dark = localStorage.getItem("tema") === "dark";
    
        if (dark) {
            logo.src = "https://i.hizliresim.com/oggbtip.png";
        } else {
            logo.src = "https://www.mcpsp.com/styles/default/xenforo/xenforo-logo.png";
        }
    }
    o.observe(document.documentElement, { childList: true, subtree: true });

    function istatistikfix() {
        if (document.getElementById("istatistikfix")) return;
    
        const style = document.createElement("style");
        style.id = "istatistikfix";
        style.textContent += `
        .title_istatistik {
        z-index: 2 !important;
        }
        .istatistik_progress_value {
        z-index: 2 !important;
        }
        `;      
        document.head.appendChild(style);
    }
    istatistikfix();
    
    function Fixbir() {
        if (localStorage.getItem("tema") !== "dark") return;
        if (document.getElementById("Fixbir")) return;
    
        const style = document.createElement("style");
        style.id = "Fixbir";
        
        style.textContent = `
            .memberOverviewBlock-seeMore {
                background: #050505 !important;
                background-color: #050505 !important;
                background-image: none !important;
                border: none !important;
            }
            
        `;
        style.textContent += `
        .block-header,
        .block-header::before,
        .block-header::after {
            background: #0c1624 !important;
            background-image: none !important;
            border: transparent !important;
            }

        `;
        style.textContent += `
        .block .onecikan-header,
        .block-container .onecikan-header {
            background: #0c1624 !important;
            border: none !important;
        }
        `;
        style.textContent += `
        .XGT-istatistik-govde--blok{
            background: #0c1624 !important;
        }
        `;
        style.textContent += `
        .bbCodeBlock-title{
            background-color: #050505 !important;
        }
        `;
        
        style.textContent += `
        .message-userExtras,
        .message-userExtras * {
            background-color: #050505 !important;
            border: none !important;
        }
        `;
        style.textContent += `
        .benzer-konular-resimli.resimli-mobil{
            background: none !important;
            border: transparent !important;
            box-shadow: 0 0 0 0.5px #444;
            
        }
        `;
        style.textContent += `
        .benzerkonu-blok-4 * {
            
            color: white !important;
        }
        `;
        style.textContent += `
        .bbCodeBlock-expandLink{
            background: linear-gradient(to bottom, rgba(5,5,5,0) 0%, rgba(5,5,5,0.8) 60%, #050505 100%) !important;
            
        }
        `;
        style.textContent += `
        .node+.node {
            border-top: 1px solid transparent;
            box-shadow: 0 0 0 0.5px #444;
        } 
        
        `;
        style.textContent += `
        .message-cell.message-cell--user, .message-cell.message-cell--action {
            border: transparent !important;
            
        }
        
        `;
        style.textContent += `
        .bbCodeBlock {
            border-right: transparent !important;
            border-top: transparent !important;
            border-bottom: transparent !important;
            box-shadow: 0 0 0 0.5px #444;
        }
        
        `;
        style.textContent += `
        .blockMessage.blockMessage--none{
            background: none !important;
            border: transparent !important;
        }
        
        `;
        style.textContent += `
        .message-attribution {
            border-bottom: transparent !important;
            box-shadow: 0 0.5px 0 0 #444;
        }
        
        `;
        style.textContent += `
        .reactionsBar {
            background-color: #050505 !important;
            border-top: transparent !important;
            border-right: transparent !important;
            border-bottom: transparent !important;
            box-shadow: 0 0 0 0.5px #444;
        }
        
        `;
        style.textContent += `
        .block-footer {
            border-top: transparent !important;
            background: linear-gradient(180deg, #1b2c45 0%, #0c1624 60%, #050505 100%);
            color: #8d8e8f !important;
        }
        
        `;
        style.textContent += `
        .XGT-istatistik-genel--govde .XGT-istatistik-govde--kolon .XGT-istatistik-tab-header {
            background-color: none !important;
            background: none !important;
            background: linear-gradient(180deg, rgba(12,22,36,0.7) 0%, rgba(12,22,36,0) 50%) !important;
        }
        
        `;
        style.textContent += `
        .XGT-istatistik-genel--govde .XGT-istatistik-govde--kolon .XGT-istatistik-tab-header .tabs-tab.is-active {
            background-color: transparent !important;
        }
        
        `;
        style.textContent += `
        .XGT-istatistik-genel--govde .XGT-istatistik-footer {
            background-color: transparent !important;
            
        }
        
        `;
        style.textContent += `
        .pageNav-page {
            background: none !important;
        
        `;
        style.textContent += `
        .pageNav-page.pageNav-page--current {
        background-color: #fff4e5 !important;
        color: #aa6709 !important;
        border: none !important;
        }
        
        `;
        
        document.head.appendChild(style);
    }

    Fixbir();

    function Fixiki() {
        if (localStorage.getItem("tema") !== "dark") return;
        if (document.getElementById("Fixiki")) return;
    
        const style = document.createElement("style");
        style.id = "Fixiki";
        style.textContent = `
            .menu.menu--structural,
            .menu.menu--structural .menu-content,
            .menu.menu--structural .menu-scroll,
            .menu.menu--structural .js-convMenuBody {
                background: #050505 !important;
                background-color: #050505 !important;
                background-image: none !important;
            }
        `;
        style.textContent += `
        .menu.menu--structural .menu-row:hover,
        .menu.menu--structural .menu-row.is-selected,
        .menu.menu--structural .menu-row.is-active {
        background-color: transparent !important;
        border-bottom: transparent !important;
        box-shadow: 0 0.5px 0 0 #444;
        }
        `;
        style.textContent += `
        .menu-footer {
            background: none !important;
            background-color: #1e1e1e !important;
            border-top: transparent !important;
            box-shadow: 0 0 0 0.5px #444;
        }
        `;
        style.textContent += `
        .menu-header{
            background: none !important;
            background: #0c1624 !important;
            border-bottom: transparent !important;
            box-shadow: 0 0.5px 0 0 #444;
        }
        `;
        style.textContent += `
            .menu--structural .menu-content,
            .menu--structural .menu-scroller,
            .menu--structural .js-convMenuBody {
                background: #1e1e1e !important;
                background-color: #1e1e1e !important;
                border: transparent !important;
            }

            .contentRow-main {
                color: #FFFFFF !important;
            }
        `;
        style.textContent += `
        .menu-row.menu-row--alt{
            
            background: #050505 !important;
            box-shadow: 0 0 0 0.5px #444;
        }
        `;
        style.textContent += `
        .menu-linkRow {

            color: #FFFFFF !important;
        }
        `;
        style.textContent += `
        .input * {
            background: none !important;
            background-color: #1e1e1e !important;
        }
        `;

        document.head.appendChild(style);
    }
        Fixiki();
    

    
    

    function pp() {

        const profilYolu = "/members/yerayay.245681/";
        const bannerUrl = "https://i.hizliresim.com/2zyqwwd.gif";

        if (!location.pathname.startsWith(profilYolu)) return;

        const banner =
            document.querySelector(".memberHeader-main") ||
            document.querySelector(".memberHeader") ||
            document.querySelector(".profileBanner");

        if (!banner) return;

        banner.style.setProperty("background-image", `url('${bannerUrl}')`, "important");
        banner.style.setProperty("background-size", "cover", "important");
        banner.style.setProperty("background-position", "center", "important");
        banner.style.setProperty("background-repeat", "no-repeat", "important");
        
        }
    pp();

    


    


    
})();