const reels = [
  {
    username: "saurabh_sahu",
    likeCount: 620,
    isLiked: false,
    commentCount: 120,
    caption: "E-commerce change: Adapting to the Future #shorts",
    video: "video.1.mp4",
    userProfile: "./profiles/user1.webp",
    shareCount: 90,
    isFollowed: false
  },
  {
    username: "tech_guru",
    likeCount: 1520,
    isLiked: true,
    commentCount: 340,
    caption: "This AI tool will blow your mind 🤯",
    video: "video.1.mp4",
    userProfile: "./profiles/user2.webp",
    shareCount: 210,
    isFollowed: true
  },
  {
    username: "fashion_diaries",
    likeCount: 980,
    isLiked: false,
    commentCount: 85,
    caption: "New streetwear lookbook for 2025 👗",
    video: "video.1.mp4",
    userProfile: "./profiles/user3.webp",
    shareCount: 120,
    isFollowed: false
  },
  {
    username: "travel_with_raj",
    likeCount: 2120,
    isLiked: false,
    commentCount: 410,
    caption: "Exploring the mountains 🏔️✨",
    video: "video.1.mp4",
    userProfile: "./profiles/user4.webp",
    shareCount: 300,
    isFollowed: true
  },
  {
    username: "foodielife",
    likeCount: 450,
    isLiked: false,
    commentCount: 62,
    caption: "This street food is unreal 😋🔥",
    video: "video.1.mp4",
    userProfile: "./profiles/user5.webp",
    shareCount: 50,
    isFollowed: false
  },
  {
    username: "gym_beast",
    likeCount: 1890,
    isLiked: true,
    commentCount: 320,
    caption: "Monday motivation 💪",
    video: "video.1.mp4",
    userProfile: "./profiles/user6.webp",
    shareCount: 170,
    isFollowed: true
  },
  {
    username: "coding_with_sam",
    likeCount: 720,
    isLiked: false,
    commentCount: 150,
    caption: "JavaScript tips nobody told you 🔥",
    video: "video.1.mp4",
    userProfile: "./profiles/user7.webp",
    shareCount: 80,
    isFollowed: false
  },
  {
    username: "dailyvibes",
    likeCount: 1320,
    isLiked: true,
    commentCount: 240,
    caption: "Aesthetic vibes for your day ✨",
    video: "video.1.mp4",
    userProfile: "./profiles/user8.webp",
    shareCount: 110,
    isFollowed: true
  },
  {
    username: "car_world",
    likeCount: 2400,
    isLiked: false,
    commentCount: 530,
    caption: "This supercar looks insane 🏎️🔥",
    video: "video.1.mp4",
    userProfile: "./profiles/user9.webp",
    shareCount: 350,
    isFollowed: false
  },
  {
    username: "music_mania",
    likeCount: 560,
    isLiked: false,
    commentCount: 70,
    caption: "This beat hits hard 🎧🔥",
    video: "video.1.mp4",
    userProfile: "./profiles/user10.webp",
    shareCount: 45,
    isFollowed: false
  }
];

var viral= document.querySelector('.allreel')

function adddata(){
  var sum = ''
reels.forEach(function(elem,idx){
    sum= sum+`<div class="reel">
          <video autoplay loop muted src="./video.1.mp4"></video>
          <div class="bottom">
            <div class="user">
              <img class="don" src="./rangila.avif">
              <h4>@saurabh. sahu</h4>
              <button>${elem.isFollowed?'unfollow':'follow'}</button>
            </div>
             <h3> E-commerce change: Adapting to the Future #shorts </h3>
          </div>
          <div class="right">
            <div id=${idx} class="likes">
              <h4 class="like"> <i class="ri-heart-line"></i> </h4>
              <h6>600</h6>
            </div>
             <div class="comments">
              <h4 class="comment"> <i class="ri-chat-3-line"></i> </h4>
              <h6>800</h6>
            </div>
            <div class="shares">
              <h4 class="share"> <i class="ri-share-fill"></i> </h4>
              <h6>900</h6>
            </div>
             <div class="dotss">
              <h4 class="dots"> <i class="ri-list-unordered"></i> </h4>
            </div>
          </div>
        </div>` 
})

viral.innerHTML= sum
}
adddata()


viral.addEventListener('click',function(dets){
  reels[dets.target.id].likeCount++
  adddata()
})
