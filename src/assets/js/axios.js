import axios from 'axios'
import getUrl from './getPath'
export default {
  Get:(config)=>{
    axios({
      methods:'get',
      url:getUrl(config.url),
      param:config.param
    }).then((res)=>{
      stateDetection(res);
      config.callback && config.callback(res)
    })
  },
  Post:()=> {
    axios({
      methods:'post',
      url:getUrl(config.url)
    }).then((res)=>{
      stateDetection(res);
      config.callback && config.callback(res)
    })
  }
}
let stateDetection=(data,callback)=>{
  let status=data.status_code;
  switch (status){
    case 102:
      break;
    case 103:
      alert(data,content);
      break;
    case 404:
      window.location.href=data.url;
      break;
  }
}
