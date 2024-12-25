document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById("room-section");
    
    // ตั้งค่า Header ของโรงแรม
    const hotelName = document.getElementById("hotel-name");
    hotelName.textContent = hotelData.hotelName;
  
    // ดึงข้อมูลห้องพักจาก JSON และสร้าง HTML
    hotelData.sections[0].rooms.forEach((room) => {
      const roomDiv = document.createElement("div");
      roomDiv.className = "room";
  
      roomDiv.innerHTML = `
        <h2>${room.name}</h2>
        <p>ขนาดห้อง: ${room.size}</p>
        <p>วิว: ${room.view}</p>
        <p>คะแนน: ${room.score}</p>
        <p>รีวิว: ${room.reviews}</p>
        <img src="${room.image}" alt="${room.name}">
        <ul>
          ${room.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
        <button>${room.bookingButton}</button>
      `;
  
      section.appendChild(roomDiv);
    });
  });
  