/* eslint-disable react/prop-types */


const UserStatus = ({loggedIn,isAdmin}) => {
  if(loggedIn && isAdmin) {
    return <div>Welcome Admin</div>;
}else if(loggedIn){
    return <div>Welcome User</div>;
}else{
    return <div>Please login</div>;
}
}
export default UserStatus