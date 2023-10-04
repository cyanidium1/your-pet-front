"use strict";(self.webpackChunkyour_pet_front=self.webpackChunkyour_pet_front||[]).push([[382],{3434:function(e,s,n){n.d(s,{Z:function(){return v}});n(2791);var t=n(7689),a=n(3439),r=n(9337),i=n(4289),o=n(9874),l=n(1576),c=n(2430),d=n(9321),u=n(1503),h=n(3291),m="AddButton_addBtnBig__clY2h",p="AddButton_icon__oJDYR",x="AddButton_addBtn__wnzWo",_=n(184),j=function(e){var s=e.clickFunc,n=(0,u.Z)(h.s.breakpoints.mobile.media);return(0,_.jsx)(_.Fragment,{children:n?(0,_.jsxs)("button",{onClick:s,className:x,children:[(0,_.jsx)("svg",{className:p,children:(0,_.jsx)("use",{href:a.Z+"#icon-plus"})}),"Add pet"]}):(0,_.jsxs)("button",{onClick:s,className:m,children:["Add pet",(0,_.jsx)("svg",{className:p,children:(0,_.jsx)("use",{href:a.Z+"#icon-plus-small"})})]})})},v=function(){var e=(0,r.I0)(),s=(0,t.s0)(),n=(0,r.v9)(i.Jt),a=(0,r.v9)(l.HN);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(j,{clickFunc:function(){n?s("/add-pet"):e((0,o.kO)()),document.body.style.overflow="hidden"}}),a&&(0,_.jsx)(d.u,{closeReducer:function(){e((0,o.A1)())},children:(0,_.jsx)(c.Z,{})})]})}},2430:function(e,s,n){n.d(s,{Z:function(){return i}});n(2791);var t={modalTitle:"ModalAttention_modalTitle__zYFgX",modalText:"ModalAttention_modalText__81Q9x",modalButtonsWrapper:"ModalAttention_modalButtonsWrapper__dK7dt"},a=n(8726),r=n(184),i=function(){return(0,r.jsxs)("div",{className:t.modalAttentionWrapper,children:[(0,r.jsx)("h1",{className:t.modalTitle,children:"Attention"}),(0,r.jsx)("p",{className:t.modalText,children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),(0,r.jsxs)("div",{className:t.modalButtonsWrapper,children:[(0,r.jsx)(a.Z,{text:"Log IN",isFilled:!0,color:"yellow",to:"/login",svg:"#icon-pawprint-1"}),(0,r.jsx)(a.Z,{text:"Registration",isFilled:!0,color:"white",to:"/register"})]})]})}},4875:function(e,s,n){n.r(s),n.d(s,{default:function(){return ee}});var t={},a=n(9439),r="personal_card__3TaEu",i="personal_personalPhotoEdit__vqjxr",o="personal_petsCard__j8aaN",l="personal_button__gyJOj",c="personal_label__+ge64",d="personal_form__sTr5X",u="personal_input__cdkc9",h="personal_editPhoto__OlqXq",m="personal_editPhotoBlock__z4099",p="personal_confirmPhoto__TwSml",x="personal_costil__xbvSV",_="personal_confirmPhoto2__frrhC",j="personal_fileField__nj4LA",v="personal_editPhotoLabel__FFUKe",f="personal_userFields__IA61n",N="personal_myPets__oZJyg",b="personal_petsDelBtn__do4HA",g="personal_petsDelBtnSVG__HqmqR",y="personal_petsCardList__VX2f2",Z="personal_petsListItem__uKcxc",k="personal_petsContainer__F5flT",C="personal_petsInfoBlock__hFBBj",F="personal_petsInfo__TkUZ5",I="personal_petsImg__d9MJx",w="personal_spyIMG__fx74J",B=n(3439),A=n(4165),L=n(5861),q=n(5705),R=n(6727),M=n(4289),T=n(618),P=n(9337),S=n(4142),V=n(3645),E=n(9098),J=n(724),O=n(3733),U=n(184),z=(0,J.ZP)(E.Z)((function(){return{"& .MuiOutlinedInput-notchedOutline":{borderRadius:"20px",borderColor:"#54adff"},"& .MuiInputBase-input":{padding:"4px 12px",fontSize:16},"& .MuiInputLabel-root":{top:"-15px"},"& .MuiInputLabel-root.Mui-focused":{top:"0px"}}})),W=R.Ry().shape({photo:R.nK().required("Please upload a photo"),firstName:R.Z_().min(2,"Requered min one letter").required("Requered"),email:R.Z_().required("Requered").matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,"Not valid"),birthday:R.Z_().required("Requered").matches(/^(0[1-9]|1\d|2[0-9]|3[01]).(0[1-9]|1[0-2]).\d{4}$/,"Not valid"),phone:R.Z_().optional().matches(/^\+380\d{9}$/,"Not valid"),city:R.Z_().optional().matches(/^[A-Z][A-Za-z\-]+$/,"Not valid")}),D=function(e){var s=e.mode,n=e.handleEdit,t=(0,T.v9)(M.dy),a=(0,P.I0)(),r=function(){var e=(0,L.Z)((0,A.Z)().mark((function e(s,t){var r;return(0,A.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.setSubmitting,e.prev=1,e.next=4,a((0,S.D)(s));case 4:return e.next=6,a((0,V.Ec)());case 6:n(),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:return e.prev=11,r(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,9,11,14]])})));return function(s,n){return e.apply(this,arguments)}}();return(0,U.jsx)(q.J9,{initialValues:{photo:(null===t||void 0===t?void 0:t.user.avatarURL)||"123",firstName:(null===t||void 0===t?void 0:t.user.name)||"",email:(null===t||void 0===t?void 0:t.user.email)||"",birthday:(null===t||void 0===t?void 0:t.user.birthday)||"",phone:(null===t||void 0===t?void 0:t.user.phone)||"",city:(null===t||void 0===t?void 0:t.user.city)||"",confirm:!1},validationSchema:W,onSubmit:r,children:function(e){var a=e.values,r=(e.handleChange,e.setFieldValue);e.formikProps,e.handleReset,e.setFieldTouched;return(0,U.jsxs)(q.l0,{className:d,children:[(0,U.jsx)("div",{id:"photo",children:(0,U.jsx)("button",{type:"reset",onClick:function(){n()},children:(0,U.jsx)("svg",{className:i,children:(0,U.jsx)("use",{href:"".concat(B.Z,"#icon-").concat(s?"cross-small":"edit")})})})}),(0,U.jsx)("div",{className:(0,O.Z)("string"===typeof a.photo?x:""),children:(0,U.jsxs)("label",{className:m,children:[(0,U.jsx)("div",{children:(0,U.jsx)("img",{src:"object"===typeof a.photo?URL.createObjectURL(a.photo):a.photo,alt:"Selected img",className:m})}),(0,U.jsx)("input",{onChange:function(e){r("photo",e.target.files[0])},className:j,type:"file",name:"photo",disabled:!s}),(0,U.jsx)("div",{className:p,children:s&&("string"===typeof a.photo?(0,U.jsxs)("div",{className:v,children:[(0,U.jsx)("svg",{className:h,children:(0,U.jsx)("use",{href:"".concat(B.Z,"#icon-camera")})}),(0,U.jsx)("span",{children:"Edit photo"})]}):"")})]})}),s&&"string"!==typeof a.photo&&!a.confirm&&(0,U.jsxs)("div",{className:"".concat(v," ").concat(_),children:[(0,U.jsx)("button",{type:"button",onClick:function(){return r("confirm",!0)},children:(0,U.jsx)("svg",{className:h,children:(0,U.jsx)("use",{href:"".concat(B.Z,"#icon-check")})})}),(0,U.jsx)("span",{children:"Confirm"}),(0,U.jsx)("button",{id:"cansel",type:"button",onClick:function(){r("photo",t.user.avatarURL)},children:(0,U.jsx)("svg",{className:h,children:(0,U.jsx)("use",{href:"".concat(B.Z,"#icon-cross-small")})})})]}),(0,U.jsxs)("div",{className:f,children:[(0,U.jsxs)("label",{htmlFor:"firstName",className:c,children:["Name:",(0,U.jsx)(q.gN,{name:"firstName",type:"email",children:function(e){var n=e.meta;e.isValid,e.validate;return(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(z,{disabled:!s,error:!!n.error,required:!0,className:u,label:n.error,value:a.firstName,onChange:function(e){r("firstName",e.target.value)}})})}})]}),(0,U.jsxs)("label",{htmlFor:"email",className:c,children:["Email:",(0,U.jsx)(q.gN,{name:"email",children:function(e){var n=e.meta;e.isValid;return(0,U.jsx)(z,{error:!!n.error,disabled:!s,required:!0,className:u,label:n.error,value:a.email,onChange:function(e){r("email",e.target.value)}})}})]}),(0,U.jsxs)("label",{htmlFor:"birthday",className:c,children:["Birthday:",(0,U.jsx)(q.gN,{name:"birthday",children:function(e){var n=e.meta;e.isValid;return(0,U.jsx)(z,{error:!!n.error,disabled:!s,required:!0,className:u,label:n.error,value:a.birthday,sx:{"& .MuiInputLabel-root":{top:"-13px"}},onChange:function(e){r("birthday",e.target.value)}})}})]}),(0,U.jsxs)("label",{htmlFor:"phone",className:c,children:["Phone:",(0,U.jsx)(q.gN,{name:"phone",children:function(e){var n=e.meta;e.isValid;return(0,U.jsx)(z,{error:!!n.error,disabled:!s,className:u,label:n.error,value:a.phone,sx:{"& .MuiInputLabel-root":{top:"0px"}},onChange:function(e){r("phone",e.target.value)}})}})]}),(0,U.jsxs)("label",{htmlFor:"city",className:c,children:["City:",(0,U.jsx)(q.gN,{name:"city",children:function(e){var n=e.meta;e.isValid;return(0,U.jsx)(z,{error:!!n.error,disabled:!s,className:u,label:n.error,value:a.city,sx:{"& .MuiInputLabel-root":{top:"0px"}},onChange:function(e){r("city",e.target.value)}})}})]})]}),s&&(0,U.jsx)("button",{className:"".concat(l),type:"submit",children:"Save"})]})}})},K=n(2791),X=n(6899),Y=(n(9874),n(6056),n(9321),function(){var e=(0,K.useState)(!1),s=(0,a.Z)(e,2),n=s[0],t=s[1];(0,P.I0)(V.ni);return(0,U.jsxs)("div",{children:[(0,U.jsx)("h2",{children:"My information:"}),(0,U.jsxs)("div",{className:r,children:[(0,U.jsx)(D,{mode:n,handleEdit:function(){return t(!n)}}),!n&&(0,U.jsx)(X.Z,{text:"Logout",classes:"cartLogout"})]})]})}),$=n(3434),H=n(4625),G=n.p+"static/media/hellofromteam2.b94ec0e3575cbd7c39bc.webp",Q=function(){var e=(0,P.v9)(M.dy),s=(0,H.Cv)(),n=(0,a.Z)(s,1)[0],t=(0,P.I0)();return(0,U.jsxs)("div",{className:k,children:[(0,U.jsxs)("div",{className:N,children:[(0,U.jsx)("h2",{children:"My pets:"}),(0,U.jsx)($.Z,{})]}),(0,U.jsx)("div",{className:o,children:(0,U.jsxs)("ul",{className:y,children:[null===e||void 0===e?void 0:e.user.pets.map((function(e,s){return(0,U.jsxs)("li",{className:Z,children:[(0,U.jsx)("button",{type:"button",className:b,onClick:function(){n(e._id),t((0,V.Ec)())},children:(0,U.jsx)("svg",{className:g,children:(0,U.jsx)("use",{href:"".concat(B.Z,"#icon-trash-2")})})}),(0,U.jsx)("img",{src:e.petURL,className:I}),(0,U.jsxs)("div",{className:C,children:[(0,U.jsxs)("div",{className:F,children:[(0,U.jsx)("h3",{children:"Name:"}),(0,U.jsx)("div",{children:e.name})]}),(0,U.jsxs)("div",{className:F,children:[(0,U.jsx)("h3",{children:"Date of birth:"}),(0,U.jsx)("div",{children:e.dateOfBirth})]}),(0,U.jsxs)("div",{className:F,children:[(0,U.jsx)("h3",{children:"Type:"}),(0,U.jsx)("div",{children:e.type})]}),(0,U.jsxs)("div",{className:F,children:[(0,U.jsx)("h3",{children:"Comments:"}),(0,U.jsx)("div",{children:e.comments})]})]})]},s)})),0===(null===e||void 0===e?void 0:e.user.pets.length)&&(0,U.jsxs)("div",{className:w,children:[(0,U.jsx)("img",{src:G}),(0,U.jsx)("p",{children:'You have not added your pets, if you want to add them, click on the button "Add pet"'})]})]})})]})},ee=function(){return(0,U.jsx)(U.Fragment,{children:(0,U.jsxs)("section",{className:"container ".concat(t.section),children:[(0,U.jsx)(Y,{}),(0,U.jsx)(Q,{})]})})}}}]);
//# sourceMappingURL=382.7a71ff52.chunk.js.map