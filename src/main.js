let html = document.querySelector('#html')
let style = document.querySelector('#style')

let string = `
/*你好，我是lance
*我将画一个太极*/

/* 将八卦固定在屏幕中间*/
#八卦-wrapper {
   position: fixed;
   top: 20px;
   left: 50%;
   transform: translateX(-50%);
  }

/*首先画一个大圆*/
#八卦 {
    border:1px solid red;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    
  }
  /*将大圆分成黑白两半*/
  #八卦 > div:first-child {
    border:1px solid red;
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0;
    background: white;
    border:none;
  }
  #八卦 > div:nth-child(2) {
    border:1px solid red;
    width: 50%;
    height: 100%;
    position: absolute;
    right: 0;
    background: black;
    border:none;
  }
  /*添加两个黑白的小球*/
  #八卦 > div:nth-child(3) {
    border:1px solid red;
    z-index: 1;
    background: white;
    border-radius: 50%;
    position: absolute;
    width: 50%;
    height: 50%;
    left: 50%;
    margin-left: -25%;
    
    border:none;
  }
  #八卦 > div:nth-child(4) {
    border:1px solid red;
    z-index: 1;
    background: black;
    border-radius: 50%;
    position: absolute;
    width: 50%;
    height: 50%;
    left: 50%;
    bottom: 0;
    margin-left: -25%;
    border:none;
  }
  /*添加黑白圆点*/
  #八卦 > div:nth-child(5) {
    border:1px solid red;
    z-index: 1;
    background: black;
    border-radius: 50%;
    position: absolute;
    width: 12.5%;
    height: 12.5%;
    left: 50%;
    margin-left: -6.25%;
    top: 50%;
    margin-top: -31.25%;
  
    border:none;
  }
  #八卦 > div:nth-child(6) {
    border:1px solid red;
    z-index: 1;
    background: white;
    border-radius: 50%;
    position: absolute;
    width: 12.5%;
    height: 12.5%;
    left: 50%;
    margin-left: -6.25%;
    bottom: 50%;
    margin-bottom: -31.25%;
    
    border:none;
  }
  
  /*添加旋转动画和阴影*/
  #八卦{
    animation: x linear 2s infinite;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);
    border:none;
  }
  @keyframes x {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

 /*八卦图画好了*/

`

let string2 = ``
let n =0
let step = () =>{
    setTimeout (() =>{
        //如果是回车或空格则替换，否则照搬
        if(string[n]==='\n'){
            string2+= '</br>'
        }else if(string[n]===" "){
            string2+= '&nbsp'
        }else{
            string2+=string[n]
        }
        html.innerHTML=string2
        style.innerHTML = string.substring(0,n)
        //每次打印代码时都将屏幕滚动条拉到最下面
        window.scrollTo(0,9999) 
        html.scrollTo(0,9999) 
        if(n<string.length-1){
            n+=1
            step()
        }
    },10)
}
step()
