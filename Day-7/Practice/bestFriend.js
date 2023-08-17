function bestFriend(name){
    var friend = name[0];
    for(var i = 0; i < name.length; i++){
        if(friend.length < name[i].length){
            friend = name[i];
        }
    }
    return friend;
}

var name = ['Rahim', 'Karim', 'Jabbar', 'Kamal', 'Jamal', 'Rahima', 'Kamala'];
console.log(bestFriend(name));