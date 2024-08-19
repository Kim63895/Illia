@font-face {
  font-family: "Montserrat-Bold";
  src: url(../fonts/Montserrat-Bold.ttf);
}
@font-face {
  font-family: "Montserrat";
  src: url(../fonts/Montserrat-Regular.ttf);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  width: 100%;
}

.conteiner {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  background: linear-gradient(228.57deg, #323264 11.93%, #323264 57.17%, #643E72 87.46%);
  font-family: "Montserrat";
  font-size: 16px;
  color: #FFFFFF;
}

.header {
  padding: 50px 60px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.header .logo {
  font-size: 2.375rem;
  font-weight: 700;
  position: absolute;
  object-position: center;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.conteiner-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background-image: url(../img/Symbol.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 100vh;
}

.header_heading1-h1 {
  font-size: 2.25rem;
  font-weight: 400;
  text-align: left;
  display: flex;
}

.header_heading2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header_heading2 .header_heading2-top-sircles {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #E6E6F0;
}
.header_heading2 .header_heading2-top-sircles::after {
  content: "";
  padding-left: 6px;
}

.header_heading2-top {
  display: flex;
  align-items: center;
  gap: 6px;
  padding-bottom: 16px;
  font-weight: 700;
}
.header_heading2-top a {
  font-weight: 700;
  color: #FFFFFF;
  padding: 5px 7px;
}
.header_heading2-top a:active {
  background-color: #F0145A;
  color: #FFFFFF;
  transition: 99999s;
}
.header_heading2-top a:hover {
  background-color: #F0145A;
  border-radius: 8px;
  color: #FFFFFF;
}
.header_heading2-top .icon-fb:hover {
  fill: #f0145a;
}

a {
  text-decoration: none;
  color: #FFFFFF;
}

.header_heading2-buttom {
  align-self: flex-end;
}
.header_heading2-buttom nav {
  display: flex;
  gap: 14px;
}
.header_heading2-buttom a {
  font-weight: 700;
}
.header_heading2-buttom a:hover {
  border-bottom: 2px #f0145a solid;
  color: #F0145A;
}

.arrow {
  align-self: center;
  position: relative;
  z-index: 100;
  height: 42px;
  width: 42px;
  border: 2px gray solid;
  border-radius: 50%;
  background: transparent;
}
.arrow div {
  position: absolute;
  height: 16px;
  width: 16px;
  border-bottom: 2px solid #FFFFFF;
  border-left: 2px solid #FFFFFF;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  transition: 0.1s ease;
}

.arrow:hover {
  cursor: pointer;
  border-color: #F0145A;
}

.arrow:hover div {
  cursor: pointer;
  border-color: #F0145A;
}

html {
  scroll-behavior: smooth;
}

.about_menu {
  margin: auto;
  display: flex;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 60px;
}
.about_menu .about_menu-links {
  width: 34.72%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: end;
  font-size: 2.375rem;
  margin-top: 14px;
  margin-bottom: 14px;
}
.about_menu .about_menu-links a:first-child {
  background: linear-gradient(90.13deg, #EF8080 0.84%, #F0145A 99.96%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.about_menu .vertical-line {
  border-left: 4px rgba(255, 255, 255, 0.3019607843) solid;
  margin-left: 60px;
  margin-right: 60px;
}
.about_menu .about_menu-text {
  width: 40.34%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.about_menu .about_menu-text h4 {
  font-size: 1.875rem;
  margin-bottom: 30px;
}
.about_menu .about_menu-text p {
  font-size: 1.2rem;
}

.services_menu-headding {
  padding-left: 60px;
}
.services_menu-headding a {
  font-weight: 700;
  color: #24a3ff;
}
.services_menu-headding h3 {
  font-size: 2.375rem;
  font-weight: 700;
  color: #F0145A;
}

.services_menu-cards {
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-between;
  padding: 60px;
  gap: 60px;
}

.cards_menu {
  width: calc(33.333% - 60px);
  font-weight: 400;
}
.cards_menu h5 {
  padding-top: 30px;
  padding-bottom: 14px;
  font-size: 1.75rem;
  color: #24a3ff;
}
.cards_menu div {
  display: flex;
  align-items: center;
  justify-content: center;
  background: 92px #FFFFFF;
  width: 92px;
  height: 92px;
  border-radius: 18px;
}

.cards_menu img {
  width: 64px;
  height: 64px;
}

@media screen and (max-width: 768px) {
  .header {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
  }
  .header .header_heading2-buttom {
    order: 2;
  }
  .header .header_heading1-h1 {
    position: absolute;
    top: 105px;
  }
  .header .header_heading2 {
    gap: 120px;
  }
  .header .header_heading2-buttom {
    align-self: flex-start;
  }
  .conteiner-header {
    background-size: cover;
    background-attachment: scroll;
  }
  .about_menu {
    flex-direction: column;
  }
  .about_menu .about_menu-links {
    padding-left: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    font-size: 2.375rem;
    margin: 0;
  }
  .about_menu .about_menu-links a {
    white-space: pre;
    object-position: center;
  }
  .about_menu .about_menu-links a:first-child {
    background: linear-gradient(90.13deg, #EF8080 0.84%, #F0145A 99.96%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .about_menu .vertical-line {
    border-bottom: 4px rgba(255, 255, 255, 0.3019607843) solid;
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .about_menu .about_menu-text {
    width: 100%;
    align-items: flex-start;
    justify-content: center;
  }
}
@media screen and (max-width: 540px) {
  .header {
    padding: 30px 40px;
  }
  .about_menu .about_menu-links {
    padding-left: 30px;
  }
  .header {
    padding: 20px 10px;
  }
  .header .header_heading2-buttom {
    overflow: auto;
  }
  .header_heading2-top {
    gap: 4px;
    padding-bottom: 16px;
  }
  .header_heading2-top a {
    padding: 2px 4px;
  }
  .header_heading2-top p {
    justify-items: flex-end;
  }
}
@media screen and (max-width: 376px) {
  .header_heading2-top {
    justify-self: space-between;
    align-items: flex-end;
  }
  .header_heading2-top div {
    display: none;
  }
}

/*# sourceMappingURL=style.cs.map */
