

const Logout = () => {
    var acc = []
    localStorage.setItem('accounts',JSON.stringify(acc));
    window.location = '/dashboard/login';

}
export default Logout;