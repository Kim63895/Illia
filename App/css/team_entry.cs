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

html {
  font-family: "Montserrat";
  font-size: 16px;
  color: #323264;
}

.conteiner {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  position: relative;
  z-index: 100;
  max-width: 100%;
  margin: 0 auto;
  background: #FFFFFF;
}

.header {
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
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.conteiner-header.active {
  background: #323264;
}

.header_heading1-h1 {
  padding-top: 50px;
  padding-left: 60px;
  font-size: 2.25rem;
  font-weight: 400;
  text-align: left;
  display: flex;
}

.header_heading2 {
  padding-top: 50px;
  padding-right: 60px;
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

.header-heading2-buttom {
  align-self: flex-end;
}
.header-heading2-buttom nav {
  display: flex;
  gap: 14px;
}
.header-heading2-buttom a {
  font-weight: 700;
}
.header-heading2-buttom a:hover {
  border-bottom: 2px #f0145a solid;
  color: #F0145A;
}

.header_heading2-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  padding-bottom: 16px;
  font-weight: 700;
}
.header_heading2-top div:last-child {
  border: 2px transparent solid;
  width: 38px;
  height: 38px;
  transition: 0.4s 0.3s;
  display: flex;
  align-items: center;
}
.header_heading2-top svg path {
  transition: 0.4s 0.3s;
}
.header_heading2-top svg {
  transition: 0.3s 0.4s;
}
.header_heading2-top svg:hover g > path {
  fill: #24A3FF;
  transition: 1s;
}
.header_heading2-top svg:hover {
  width: 38px;
  height: 38px;
  transition: 1s;
}
.header_heading2-top a {
  font-weight: 700;
  color: #B3B3BA;
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
  color: #24A3FF;
}

main {
  width: 75%;
}

/*# sourceMappingURL=team-entry.cs.map */
