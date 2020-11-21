if (self.CavalryLogger) { CavalryLogger.start_js(["5vrbE"]); }

__d("ProfileCometHeaderActionBarButton_action.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometHeaderActionBarButton_action",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},action:"THROW",path:"title.text"}],storageKey:null},action:"THROW",path:"title"},{alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},{kind:"RequiredField",field:{alias:"primary_icon",args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},action:"THROW",path:"primary_icon"},{alias:null,args:null,kind:"ScalarField",name:"profile_action_type",storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_optimistic_update",storageKey:null}]}],type:"ProfileAction",abstractKey:"__isProfileAction"};e.exports=a}),null);
__d("ProfileCometHeaderActionBar_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Variable",name:"render_location",variableName:"userActionBarRenderLocation"};return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"entityID"},{defaultValue:"WWW_COMET_PROFILE",kind:"LocalArgument",name:"userActionBarRenderLocation"}],kind:"Fragment",metadata:null,name:"ProfileCometHeaderActionBar_actor",selections:[{kind:"RequiredField",field:{alias:null,args:[{kind:"Variable",name:"associated_entity_id",variableName:"entityID"},a],concreteType:null,kind:"LinkedField",name:"profile_actions",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_secondary_only",storageKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometHeaderActionBarButton_action"},{args:null,kind:"FragmentSpread",name:"ProfileCometActionTrigger_action"}],storageKey:null},action:"THROW",path:"profile_actions"},{args:[{kind:"Variable",name:"entityID",variableName:"entityID"},a],kind:"FragmentSpread",name:"ProfileCometHeaderActionBarMoreMenu_actorWithActionBar"}],type:"ActorWithActionBar",abstractKey:"__isActorWithActionBar"}}();e.exports=a}),null);
__d("ProfileCometHeaderActionBarButton.react",["CometProgressRingIndeterminate.react","CometRelay","ProfileCometContextualProfileContext","React","TetraButton.react","TintableIconSource","coerceRelayImage","stylex","useProfileEngagementClickCallback","ProfileCometHeaderActionBarButton_action.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");function a(a,c){var d=a.action,e=a.labelIsHidden;e=e===void 0?!1:e;var f=a.onPress;a=babelHelpers.objectWithoutPropertiesLoose(a,["action","labelIsHidden","onPress"]);d=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometHeaderActionBarButton_action.graphql"),d);var i=h.useContext(b("ProfileCometContextualProfileContext")),j=i.groupID,k=i.userID,l=(d.profile_action_type||"unknown").toLowerCase();i=i.isContextualProfileView?{event_metadata:{entry_point:l==="edit_contextual_profile"?"self-view_edit_profile":"",groupID:j},item_subtype:l==="edit_contextual_profile"?"contextual_profile_edit":null,item_type:l,product_bucket:"contextual_profile",profile_id_dummy:k,surface:"groups"}:{item_type:l,product_bucket:"action_bar",surface:"timeline"};j=b("useProfileEngagementClickCallback")(i,f);k=d.primary_icon;l=d.title.text;i="";switch(d.profile_action_type){case"FRIEND":i="add_button";break;case"MANAGE_MEMORIALIZED_ACCOUNT":i="memorialization_manage_memorialization_button";break;default:i=l}f=d.is_optimistic_update===!0;i=f?h.jsx(b("CometProgressRingIndeterminate.react"),{color:"dark",size:16}):void 0;f=!f&&(k==null?void 0:k.uri)!=null?new(b("TintableIconSource"))("FB",b("coerceRelayImage")(k),16):void 0;return h.jsx("div",{className:e?"":"k4urcfbm",ref:c,children:h.jsx(b("TetraButton.react"),babelHelpers["extends"]({},a,{addOnPrimary:i,icon:f,label:l,labelIsHidden:e,onPress:j,reduceEmphasis:d.is_active===!0,size:"medium",testid:void 0,tooltip:e?l:null,type:d.is_active===!0?"primary":"secondary"}))})}c=h.forwardRef(a);e.exports=c}),null);
__d("partitionArray",[],(function(a,b,c,d,e,f){e.exports=a;function a(a,b,c){var d=[],e=[];a.forEach(function(f,g){b.call(c,f,g,a)?d.push(f):e.push(f)});return[d,e]}}),null);
__d("ProfileCometHeaderActionBar.react",["ix","fbt","CometDeferredPopoverTrigger.react","CometErrorBoundary.react","CometPlaceholder.react","CometRelay","ProfileCometActionTrigger.react","ProfileCometHeaderActionBarButton.react","React","TetraButton.react","fbicon","partitionArray","requireDeferred","stylex","ProfileCometHeaderActionBar_actor.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j,k=b("React"),l=b("requireDeferred")("ProfileCometHeaderActionBarMoreMenu.react"),m={buttonContainer:{marginStart:"h676nmdw"},buttonContainerExpanded:{flexGrow:"buofh1pr",maxWidth:"h8xcmbcu"},buttonContainerForHovercards:{flexGrow:"buofh1pr",maxWidth:"nxkscmto"},buttonsCentered:{justifyContent:"taijpn5t"},buttonsEnd:{justifyContent:"bkfpd7mw"},root:{alignItems:"bp9cbjyn",display:"j83agx80",marginStart:"fop5sh7t",width:"g2wf7z4h"},rootPadded:{paddingBottom:"f10w8fjw",paddingTop:"pybr56ya"}},n=3;function a(a){var c=a.actor,d=a.centerButtons;d=d===void 0?!0:d;var e=a.expanded,f=e===void 0?!1:e;e=a.noPadding;e=e===void 0?!1:e;a=a.source;var o=a===void 0?"WWW_COMET_PROFILE":a;a=b("CometRelay").useFragment(i!==void 0?i:i=b("ProfileCometHeaderActionBar_actor.graphql"),c);c=a.profile_actions;if(c.length===0)return null;c=b("partitionArray")((c=c)!=null?c:[],function(a){return a.is_secondary_only===!0});var p=c[0];c=c[1];var q=c.slice(0,n);c=[].concat(c.slice(n),p);p=k.jsxs(k.Fragment,{children:[q.map(function(a,c){return k.jsx("div",{className:(j||(j=b("stylex")))(m.buttonContainer,c===0&&(f?m.buttonContainerForHovercards:m.buttonContainerExpanded)),children:k.jsx(b("ProfileCometHeaderActionBarButton.react"),{action:a,disabled:!0,labelIsHidden:c>0})},c)}),c.length>0&&k.jsx("div",{className:(j||(j=b("stylex")))(m.buttonContainer),children:k.jsx(b("TetraButton.react"),{disabled:!0,icon:b("fbicon")._(g("484386"),16),label:h._("Mehr"),labelIsHidden:!0,type:"secondary"})})]});return k.jsx(b("CometErrorBoundary.react"),{children:k.jsx("div",{className:(j||(j=b("stylex")))(m.root,!e&&m.rootPadded,d?m.buttonsCentered:m.buttonsEnd),"data-testid":void 0,children:k.jsxs(b("CometPlaceholder.react"),{fallback:p,children:[q.map(function(a,c){return k.jsx("div",{className:(j||(j=b("stylex")))(m.buttonContainer,c===0&&(f?m.buttonContainerForHovercards:m.buttonContainerExpanded)),children:k.jsx(b("CometErrorBoundary.react"),{children:k.jsx(b("ProfileCometActionTrigger.react"),{action:a,source:o,children:function(d){return k.jsx(b("ProfileCometHeaderActionBarButton.react"),babelHelpers["extends"]({},d,{action:a,labelIsHidden:c>0}))}})})},c)}),c.length>0&&k.jsx("div",{className:(j||(j=b("stylex")))(m.buttonContainer),children:k.jsx(b("CometDeferredPopoverTrigger.react"),{align:"middle",autoAlign:!0,popoverProps:{actor:a},popoverResource:l,popoverType:"menu",children:function(a,c){return k.jsx(b("TetraButton.react"),{icon:b("fbicon")._(g("484386"),16),label:h._("Mehr"),labelIsHidden:!0,onPress:c,ref:a,testid:void 0,type:"secondary"})}})})]})})})}}),null);