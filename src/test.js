db.collection('users').get().then((querySnapshot) => {
  querySnapshot.forEach(element => {
    var data = element.data();
    console.log(data);
    console.log(username);
    console.log(data.user);
   if(data.user.includes(username)){
   
    alert('user already exists')
   }
   else{
    var arr=data.user
    arr.push("l")
    arr.push(username)
    db.collection('users').doc(userlist).update({ user: arr })
return authUser.user.updateProfile({
  displayName: username
})
   }


  });

})