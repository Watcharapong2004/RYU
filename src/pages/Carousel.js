import React, { useState } from "react";

function Carousel() {
  const images = [
    "img/334967870.jpg",
    "img/334968017.jpg",
    "img/335298252.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const updateImage = () => images[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const bookNow = () => {
    alert("ห้องพักของคุณได้รับการจองแล้ว!");
  };

  return (
    <div className="container" style={styles.container}>
      {/* Carousel */}
      <div className="image-carousel" style={styles.carousel}>
        {images.length > 0 ? (
          <img
            src={updateImage()}
            alt={`Hotel Room ${currentImageIndex + 1}`}
            style={styles.image}
          />
        ) : (
          <p style={styles.noImage}>ไม่มีรูปภาพ</p>
        )}
        <button
          className="prev"
          onClick={prevImage}
          style={{ ...styles.button, left: "10px" }}
        >
          &#10094;
        </button>
        <button
          className="next"
          onClick={nextImage}
          style={{ ...styles.button, right: "10px" }}
        >
          &#10095;
        </button>
      </div>

      {/* Content */}
      <div className="content" style={styles.content}>
        <img
          src="img/230586659.jpg" // รูปภาพห้องพักโปรโมชั่น
          alt="Promotion Room"
          style={styles.promoImage}
        />
        <div style={styles.textContent}>
          <h2 style={styles.heading}>ห้องพักโปรโมชั่น</h2>
          <p style={styles.paragraph}>
            รับส่วนลดสูงสุด 50% รับฟรี! สิทธิพิเศษสำหรับเด็ก
          </p>
          <div style={styles.promo}>รับส่วนลดสูงสุด 50%</div>
          <p style={styles.ratingText}>10/10 - 500 ความคิดเห็น</p>
          <div style={styles.starRating}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <button
            className="action-button"
            onClick={bookNow}
            style={styles.actionButton}
          >
            จองห้องพัก
          </button>
        </div>
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "1500px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  carousel: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    height: "auto",
    maxHeight: "400px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  noImage: {
    fontSize: "18px",
    color: "#777",
  },
  button: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    fontSize: "24px",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    zIndex: 1,
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    textAlign: "left",
    marginTop: "20px",
  },
  promoImage: {
    width: "500px",
    height: "500px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  textContent: {
    flex: 1,
  },
  heading: {
    fontSize: "24px",
    margin: 0,
    color: "#333",
  },
  paragraph: {
    margin: "10px 0",
    fontSize: "18px",
  },
  promo: {
    fontSize: "32px",
    fontWeight: 600,
    color: "red",
    margin: "20px 0",
  },
  ratingText: {
    fontSize: "16px",
    margin: "10px 0",
    color: "#777",
  },
  starRating: {
    display: "flex",
    margin: "10px 0",
    fontSize: "20px",
    color: "gold",
  },
  actionButton: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    textAlign: "center",
    width: "200px",
    marginTop: "20px",
  },
};

export default Carousel;
