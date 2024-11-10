import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Success = () => {
  const [ct, setCt] = useState(60);
  const navigate = useNavigate();
  const location = useLocation();

  const formData = useMemo(() => {
    return location.state || {};
  }, [location.state]);

  useEffect(() => {
    const tm = setInterval(() => {
      setCt((pc) => {
        if (pc === 1) {
          clearInterval(tm);
          navigate("/");
        }
        return pc - 1;
      });
    }, 1000);

    return () => clearInterval(tm);
  }, [navigate]);

  const rd = () => {
    if (Object.keys(formData).length) {
      return ["firstName", "lastName", "email", "date", "time", "phone"].map(
        (field) => (
          <div
            key={field}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "16px",
              borderBottom: "1px solid #eee",
              transition: "background-color 0.2s ease",
              cursor: "default",
              backgroundColor: "#fff",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#f8f8f8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#fff")
            }
          >
            <span
              style={{
                width: "120px",
                color: "#555",
                fontSize: "16px",
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              {field.replace(/([A-Z])/g, " $1").trim()}:
            </span>
            <span
              style={{
                color: "#4CAF50",
                fontSize: "18px",
                marginLeft: "32px",
                flex: 1,
              }}
            >
              {formData[field]}
            </span>
          </div>
        )
      );
    }
    return (
      <div
        style={{
          textAlign: "center",
          color: "#666",
          fontSize: "16px",
          padding: "20px",
        }}
      >
        Redirecting...
      </div>
    );
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              color: "#333",
              marginBottom: "24px",
              fontWeight: "600",
            }}
          >
            Redirecting to home in {ct} seconds
          </h1>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "black",
              color: "white",
              padding: "12px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "black")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#4CAF50")
            }
          >
            Back to home
            <HiOutlineArrowNarrowRight
              style={{
                width: "20px",
                height: "20px",
              }}
            />
          </Link>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "24px",
              borderBottom: "1px solid #eee",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                color: "#333",
                margin: 0,
              }}
            >
              Submitted Information
            </h2>
          </div>
          {rd()}
        </div>
      </div>
    </section>
  );
};

export default Success;
