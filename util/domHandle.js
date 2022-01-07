/**
 * 移动 DOM 元素
 */
let elem = document.querySelector('.move');
let dragging; //拖拽状态
let trans, portrait; //鼠标按下时相对于选中元素的位移

document.addEventListener('mousedown', function (e) {
  if (e.target == elem) {
    dragging = true; //激活拖拽状态
    let elemRect = elem.getBoundingClientRect(); //返回元素的大小及其相对于视口的位置
    trans = e.clientX - elemRect.left; //鼠标按下时和选中元素的坐标偏移:x坐标
    portrait = e.clientY - elemRect.top; //鼠标按下时和选中元素的坐标偏移:y坐标
  }
});
document.addEventListener('mouseup', function (e) {
  dragging = false;
});
document.addEventListener('mousemove', function (e) {
  if (dragging) {
    var moveX = e.clientX - trans,
      moveY = e.clientY - portrait;

    elem.style.left = moveX + 'px';
    elem.style.top = moveY + 'px';

  }
});


 /**
 * 获取 DOM 元素距顶部的距离
 */
const offset=ele=>{
 let result={
  top:0,
  left:0
 }
 const getOffset=(node,init)=>{
  if(node.nodeType!==1){
   return
 }
  position=window.getComputedStyle(node)['position']
  if(typeof(init)==='undefined'&&position==='static'){
   getOffset(node.parentNode)
   return
 }
  result.top=node.offsetTop+result.top-node.scrollTop
  result.left=node.offsetLeft+result.left-node.scrollLeft
  if(position==='fixed'){
   return
 }
  getOffset(node.parentNode)
 }
 
 if(window.getComputedStyle(ele)['display']==='none'){
  return result
 }
 
 let position
 
 getOffset(ele,true)
 
 return result
}