"use strict";(self.webpackChunkyour_pet_front=self.webpackChunkyour_pet_front||[]).push([[382],{3434:function(e,s,t){t.d(s,{Z:function(){return v}});t(2791);var n=t(7689),r=t(3439),a=t(9337),o=t(4289),l=t(9874),i=t(1576),d=t(2430),c=t(9321),u=t(1503),h=t(3291),p="AddButton_addBtnBig__clY2h",m="AddButton_icon__oJDYR",x="AddButton_addBtn__wnzWo",f=t(1087),_=t(184),j=function(e){e.clickFunc;var s=(0,u.Z)(h.s.breakpoints.mobile.media),t=(0,n.TH)();return(0,_.jsx)(_.Fragment,{children:s?(0,_.jsxs)(f.rU,{to:"/add-pet",className:x,state:{from:t},children:[(0,_.jsx)("svg",{className:m,children:(0,_.jsx)("use",{href:r.Z+"#icon-plus"})}),"Add pet"]}):(0,_.jsxs)(f.rU,{to:"/add-pet",className:p,state:{from:t},children:["Add pet",(0,_.jsx)("svg",{className:m,children:(0,_.jsx)("use",{href:r.Z+"#icon-plus-small"})})]})})},v=function(){var e=(0,a.I0)(),s=(0,n.s0)(),t=(0,a.v9)(o.Jt),r=(0,a.v9)(i.HN);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(j,{clickFunc:function(){t?s("/add-pet"):e((0,l.kO)()),document.body.style.overflow="hidden"}}),r&&(0,_.jsx)(c.u,{closeReducer:function(){e((0,l.A1)())},children:(0,_.jsx)(d.Z,{})})]})}},2430:function(e,s,t){t.d(s,{Z:function(){return o}});t(2791);var n={modalTitle:"ModalAttention_modalTitle__zYFgX",modalText:"ModalAttention_modalText__81Q9x",modalButtonsWrapper:"ModalAttention_modalButtonsWrapper__dK7dt"},r=t(8726),a=t(184),o=function(){return(0,a.jsxs)("div",{className:n.modalAttentionWrapper,children:[(0,a.jsx)("h1",{className:n.modalTitle,children:"Attention"}),(0,a.jsx)("p",{className:n.modalText,children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),(0,a.jsxs)("div",{className:n.modalButtonsWrapper,children:[(0,a.jsx)(r.Z,{text:"Log IN",isFilled:!0,color:"yellow",to:"/login",svg:"#icon-pawprint-1"}),(0,a.jsx)(r.Z,{text:"Registration",isFilled:!0,color:"white",to:"/register"})]})]})}},4875:function(e,s,t){t.r(s),t.d(s,{default:function(){return ee}});var n="Personal_container__jqJqB",r=t(9439),a="personal_card__3TaEu",o="personal_personalPhotoEdit__vqjxr",l="personal_petsCard__j8aaN",i="personal_button__gyJOj",d="personal_label__+ge64",c="personal_form__sTr5X",u="personal_input__cdkc9",h="personal_editPhoto__OlqXq",p="personal_editPhotoBlock__z4099",m="personal_confirmPhoto__TwSml",x="personal_costilDisplay__GnwPn",f="personal_fileField__nj4LA",_="personal_editPhotoLabel__FFUKe",j="personal_photoInvalid__Kq9Mg",v="personal_userFields__IA61n",b="personal_costil__xbvSV",N="personal_myPets__oZJyg",g="personal_petsDelBtn__do4HA",y="personal_petsDelBtnSVG__HqmqR",Z="personal_petsCardList__VX2f2",C="personal_petsListItem__uKcxc",M="personal_petsContainer__F5flT",I="personal_petsInfoBlock__hFBBj",k="personal_petsInfo__TkUZ5",F="personal_petsImg__d9MJx",B="personal_spyIMG__fx74J",w=t(3439),q=t(4165),P=t(5861),A=t(5705),L=t(6727),R=t(4289),T=t(618),S=t(9337),V=t(5822),U=t(9098),J=t(724),z=t(3733),E=t(184),O=(0,J.ZP)(U.Z)((function(){return{"& .MuiOutlinedInput-notchedOutline ":{borderRadius:"20px",borderColor:"#54adff"},"& .MuiInputBase-input":{padding:"4px 12px",fontSize:12},"& .MuiInputLabel-root":{top:"-15px"},"& .MuiInputLabel-root.Mui-focused":{top:"0px"}}})),W=L.Ry().shape({photo:L.nK().required("Please upload a photo"),firstName:L.Z_().min(2,"Requered min one letter").required("Requered"),email:L.Z_().required("Requered").matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,"Not valid"),birthday:L.Z_().required("Requered").matches(/^(0[1-9]|1\d|2[0-9]|3[01]).(0[1-9]|1[0-2]).\d{4}$/,"Not valid"),phone:L.Z_().optional().matches(/^\+380\d{9}$/,"Not valid"),city:L.Z_().optional().matches(/^[A-Z][A-Za-z\-]+$/,"Not valid"),confitm:null}),D=function(e){var s=e.mode,t=e.handleEdit,n=(0,T.v9)(R.dy),r=(0,S.I0)(),a=function(){var e=(0,P.Z)((0,q.Z)().mark((function e(s,n){var a;return(0,q.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setSubmitting,e.prev=1,e.next=4,r((0,V.f7)(s));case 4:t(),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:return e.prev=9,a(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[1,7,9,12]])})));return function(s,t){return e.apply(this,arguments)}}();return(0,E.jsx)(A.J9,{initialValues:{photo:(null===n||void 0===n?void 0:n.user.avatarURL)||"123",firstName:(null===n||void 0===n?void 0:n.user.name)||"",email:(null===n||void 0===n?void 0:n.user.email)||"",birthday:(null===n||void 0===n?void 0:n.user.birthday)||"",phone:(null===n||void 0===n?void 0:n.user.phone)||"",city:(null===n||void 0===n?void 0:n.user.city)||"",confirm:null,preflyPhoto:!0},validationSchema:W,onSubmit:a,children:function(e){var r=e.values,a=(e.handleChange,e.setFieldValue);e.formikProps,e.handleReset,e.setFieldTouched;return(0,E.jsxs)(A.l0,{className:c,children:[(0,E.jsx)("div",{id:"photo",children:(0,E.jsx)("button",{type:"reset",onClick:function(){t()},children:(0,E.jsx)("svg",{className:o,children:(0,E.jsx)("use",{href:"".concat(w.Z,"#icon-").concat(s?"cross-small":"edit")})})})}),(0,E.jsx)("div",{children:(0,E.jsx)("label",{className:(0,z.Z)(r.confirm?b:""),children:(0,E.jsx)(A.gN,{name:"photo",required:!0,children:function(e){e.meta;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("input",{onChange:function(e){a("preflyPhoto",!1),a("photo",e.target.files[0])},onClick:function(){return console.log(r.preflyPhoto)},className:f,type:"file",name:"photo",disabled:!s,required:!0}),(0,E.jsx)("div",{children:(0,E.jsx)("img",{src:"object"===typeof r.photo?URL.createObjectURL(r.photo):r.photo,alt:"Selected img",className:(0,z.Z)(p,"https://res.cloudinary.com/dkmmhjqew/image/upload/v1696086608/default-avatar/Photo_default_ndssoh.png"===r.photo&&s?j:"2")})}),(0,E.jsx)("div",{className:(0,z.Z)(m,s&&r.preflyPhoto&&x),children:(0,E.jsxs)("div",{className:_,children:[(0,E.jsx)("svg",{className:h,children:(0,E.jsx)("use",{href:"".concat(w.Z,"#icon-camera")})}),(0,E.jsx)("span",{children:"Edit photo"})]})})]})}})})}),(0,E.jsx)("div",{className:(0,z.Z)(m,!r.preflyPhoto&&x),children:(0,E.jsxs)("div",{className:_,children:[(0,E.jsx)("button",{type:"button",onClick:function(){a("preflyPhoto",!0),a("confirm",!0)},children:(0,E.jsx)("svg",{className:h,children:(0,E.jsx)("use",{href:"".concat(w.Z,"#icon-check")})})}),(0,E.jsx)("span",{style:{fontSize:12,verticalAlign:""},children:"Confirm"}),(0,E.jsx)("button",{id:"cansel",type:"button",onClick:function(){a("preflyPhoto",!0),a("photo",n.user.avatarURL),a("confirm",null)},children:(0,E.jsx)("svg",{className:h,children:(0,E.jsx)("use",{href:"".concat(w.Z,"#icon-cross-small")})})})]})}),(0,E.jsxs)("div",{className:(0,z.Z)(v,s&&b),children:[(0,E.jsxs)("label",{htmlFor:"firstName",className:d,children:["Name:",(0,E.jsx)(A.gN,{name:"firstName",type:"email",children:function(e){var t=e.meta;e.isValid,e.validate;return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(O,{disabled:!s,error:!!t.error,required:!0,className:u,label:t.error,value:r.firstName,onChange:function(e){a("firstName",e.target.value)},sx:{"& .MuiInputBase-root.Mui-disabled":{"& > fieldset":{borderColor:"#54adff"}}}})})}})]}),(0,E.jsxs)("label",{htmlFor:"email",className:d,children:["Email:",(0,E.jsx)(A.gN,{name:"email",children:function(e){var t=e.meta;e.isValid;return(0,E.jsx)(O,{sx:{"& .MuiInputBase-root.Mui-disabled":{"& > fieldset":{borderColor:"#54adff"}}},error:!!t.error,disabled:!s,required:!0,className:u,label:t.error,value:r.email,onChange:function(e){a("email",e.target.value)}})}})]}),(0,E.jsxs)("label",{htmlFor:"birthday",className:d,children:["Birthday:",(0,E.jsx)(A.gN,{name:"birthday",children:function(e){var t=e.meta;e.isValid;return(0,E.jsx)(O,{error:!!t.error,disabled:!s,required:!0,className:u,label:t.error,value:r.birthday,sx:{"& .MuiInputLabel-root":{top:"-13px"},"& .MuiInputBase-root.Mui-disabled":{"& > fieldset":{borderColor:"#54adff"}}},onChange:function(e){a("birthday",e.target.value)}})}})]}),(0,E.jsxs)("label",{htmlFor:"phone",className:d,children:["Phone:",(0,E.jsx)(A.gN,{name:"phone",children:function(e){var t=e.meta;e.isValid;return(0,E.jsx)(O,{error:!!t.error,disabled:!s,className:u,label:t.error,value:r.phone,sx:{"& .MuiInputLabel-root":{top:"0px"},"& .MuiInputBase-root.Mui-disabled":{"& > fieldset":{borderColor:"#54adff"}}},onChange:function(e){a("phone",e.target.value)}})}})]}),(0,E.jsxs)("label",{htmlFor:"city",className:d,children:["City:",(0,E.jsx)(A.gN,{name:"city",children:function(e){var t=e.meta;e.isValid;return(0,E.jsx)(O,{error:!!t.error,disabled:!s,className:u,label:t.error,value:r.city,sx:{"& .MuiInputLabel-root":{top:"0px"},"& .MuiInputBase-root.Mui-disabled":{"& > fieldset":{borderColor:"#54adff"}}},onChange:function(e){a("city",e.target.value)}})}})]})]}),s&&(0,E.jsx)("button",{className:"".concat(i),type:"submit",children:"Save"})]})}})},K=t(2791),H=t(6899),X=(t(9874),t(6056),t(9321),function(){var e=(0,K.useState)(!1),s=(0,r.Z)(e,2),t=s[0],n=s[1];(0,S.I0)(V.ni);return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)("div",{children:[(0,E.jsx)("h2",{children:"My information:"}),(0,E.jsxs)("div",{className:a,children:[(0,E.jsx)(D,{mode:t,handleEdit:function(){return n(!t)}}),!t&&(0,E.jsx)(H.Z,{text:"Logout",classes:"cartLogout"})]})]})})}),Y=t(3434),$=t(4625),G=t.p+"static/media/hellofromteam2.b94ec0e3575cbd7c39bc.webp",Q=function(){var e=(0,S.v9)(R.MF),s=(0,$.Cv)(),t=(0,r.Z)(s,1)[0],n=(0,S.I0)();return console.log(e),(0,E.jsxs)("div",{className:M,children:[(0,E.jsxs)("div",{className:N,children:[(0,E.jsx)("h2",{children:"My pets:"}),(0,E.jsx)(Y.Z,{})]}),(0,E.jsx)("div",{className:l,children:(0,E.jsxs)("ul",{className:Z,children:[null===e||void 0===e?void 0:e.map((function(e,s){return(0,E.jsxs)("li",{className:C,children:[(0,E.jsx)("img",{src:e.petURL,className:F}),(0,E.jsxs)("div",{className:I,children:[(0,E.jsx)("button",{type:"button",className:g,onClick:(0,P.Z)((0,q.Z)().mark((function s(){return(0,q.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t(e._id);case 2:n((0,V.Ec)());case 3:case"end":return s.stop()}}),s)}))),children:(0,E.jsx)("svg",{className:y,children:(0,E.jsx)("use",{href:"".concat(w.Z,"#icon-trash-2")})})}),(0,E.jsxs)("div",{className:k,children:[(0,E.jsx)("h3",{children:"Name:"}),(0,E.jsx)("div",{children:e.name})]}),(0,E.jsxs)("div",{className:k,children:[(0,E.jsx)("h3",{children:"Date of birth:"}),(0,E.jsx)("div",{children:e.dateOfBirth})]}),(0,E.jsxs)("div",{className:k,children:[(0,E.jsx)("h3",{children:"Type:"}),(0,E.jsx)("div",{children:e.type})]}),(0,E.jsxs)("div",{className:k,children:[(0,E.jsx)("h3",{children:"Comments:"}),(0,E.jsx)("div",{children:e.comments})]})]})]},s)})),0===(null===e||void 0===e?void 0:e.length)&&(0,E.jsxs)("div",{className:B,children:[(0,E.jsx)("img",{src:G}),(0,E.jsx)("p",{children:'You have not added your pets, if you want to add them, click on the button "Add pet"'})]})]})})]})},ee=function(){return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)("section",{className:n,children:[(0,E.jsx)(X,{}),(0,E.jsx)(Q,{})]})})}}}]);
//# sourceMappingURL=382.c5704e82.chunk.js.map