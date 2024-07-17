const base = {
    get() {
        return {
            url : "http://localhost:8080/biyeshejixitong/",
            name: "biyeshejixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/biyeshejixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "毕业设计系统"
        } 
    }
}
export default base
