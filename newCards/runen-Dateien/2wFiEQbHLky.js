if (self.CavalryLogger) { CavalryLogger.start_js(["mw+38"]); }

__d("SearchCometHashtagPostsQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3381445211982828",metadata:{},name:"SearchCometHashtagPostsQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("SearchCometHashtagRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3875898439129524",metadata:{},name:"SearchCometHashtagRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("SearchCometHashtagFeedVariables",["WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={UFI2CommentsProvider_commentsKey:"SearchCometHashtagRootQuery",displayCommentsContextEnableComment:!1,displayCommentsContextIsAdPreview:!1,displayCommentsContextIsAggregatedShare:!1,displayCommentsContextIsStorySet:!0,displayCommentsFeedbackContext:null,feedLocation:"SEARCH",feedbackSource:40,focusCommentID:null,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"search_results_page",scale:b("WebPixelRatio").get(),useDefaultActor:!1};e.exports=a}),null);
__d("SearchCometHashtagRoot.entrypoint",["JSResource","SearchCometHashtagFeedVariables","SearchCometHashtagPostsQuery$Parameters","SearchCometHashtagRootQuery$Parameters","WebPixelRatio","uuid"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){var c=a.routeParams,d=c.__eep__,e=c.__gid__,f=c.explore_tab;c=c.hashtag;a=a.timeSpentMetaData;a=(a=a==null?void 0:a.search_sid)!=null?a:b("uuid")();f=f==="latest"?"RECENT":"TOP";e=e!=null?{container_scope_fbid:e}:null;return{queries:{postsQuery:{parameters:b("SearchCometHashtagPostsQuery$Parameters"),variables:babelHelpers["extends"]({input:{explore_tab:f,extra_data:d!=null?JSON.stringify({entry_point:d}):null,scope_information:e,session_id:a,topic_id:"#"+c}},b("SearchCometHashtagFeedVariables"))},rootQuery:{parameters:b("SearchCometHashtagRootQuery$Parameters"),variables:{input:{extra_data:d!=null?JSON.stringify({entry_point:d}):null,scope_information:e,session_id:a,topic_id:"#"+c},scale:b("WebPixelRatio").get()}}}}},root:b("JSResource")("SearchCometHashtagRoot.react").__setRef("SearchCometHashtagRoot.entrypoint")};e.exports=a}),null);