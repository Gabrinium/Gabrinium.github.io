const buttons = [
  { href: "https://www.roblox.com/users/9049936914/profile", img: "imgs/robloximg.png" },
  { href: "https://x.com/Gabrinium", img: "imgs/twitterimage.png" },
  { href: "https://www.twitch.tv/gabrinium", img: "imgs/twitchimage.png" },
  { href: "https://www.youtube.com/@Gabrinium", img: "imgs/youtubeimg.png" },
  { href: "https://discord.gg/pt7KTkCdfY", img: "imgs/discordimg.png" },
  { href: "https://sociabuzz.com/gabrinium/tribe", img: "imgs/sociabuzzimg.png" }
];

const container = document.getElementById("btnjs");

buttons.forEach(button => {
  const link = document.createElement("a");
  link.href = button.href;
  link.target = "_blank";

  const img = document.createElement("img");
  img.src = button.img;
  img.alt = "";

  link.appendChild(img);
  container.appendChild(link);
});
