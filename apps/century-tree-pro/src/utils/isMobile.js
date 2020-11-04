let isMobile = null;
export let isIOS = null
if(typeof window !== 'undefined'){
isMobile =/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
isIOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
}
export default isMobile