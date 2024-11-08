import React from "react";
import Image from "next/image";
import { Heebo } from "next/font/google";
import Card from "./components/recent-post-card";

const heebo = Heebo({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
      <div className={`${heebo.className} hero-section`}> {/* Apply Heebo font here */}
        <div className="container">

          <div className="main">

            <div className="text-container">
              <h1><b>Hi, I am John, Creative Technologist</b></h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
              <button>Download resume</button>
            </div>


            <div>
              <Image src="/image.png" width={200} height={200} alt="person"></Image>
            </div>

          </div>

        </div>
      </div>

      <div className="recent-post">
        <div className="container">

          <div className="main">

            <div className="heading">
              <h3><b>Recent Post</b></h3>
              <button className="view-all-btn">View All</button>
            </div>

            <div className="card-parent">

              <Card />
              <Card />
            </div>

          </div>

        </div>
      </div>

      <div className="featured-section">
        <div className="container">
          <div className="main">
            <div className="main-heading">
              <h3><b>Featured Works</b></h3>
            </div>

          <div className="card-parent">

            <div className="card">
              <Image src="/Rectangle-30.png" width={245} height={180} alt="work-1"></Image>

              <div className="card-content">
                <h2>Designing Dashboards</h2>
                <div className="badge-parent">
                  <div className="badge">
                    <p>2020</p>
                  </div>
                  <p>Dashboard</p>

                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

              </div>
            </div>

            <div className="card">
              <Image src="/Rectangle-32.png" width={245} height={180} alt="work-1"></Image>

              <div className="card-content">
                <h2>Designing Dashboards</h2>
                <div className="badge-parent">
                  <div className="badge">
                    <p>2020</p>
                  </div>
                  <p>Dashboard</p>

                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

              </div>
            </div>

            <div className="card">
              <Image src="/Rectangle-34.png" width={245} height={180} alt="work-1"></Image>

              <div className="card-content">
                <h2>Designing Dashboards</h2>
                <div className="badge-parent">
                  <div className="badge">
                    <p>2020</p>
                  </div>
                  <p>Dashboard</p>

                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

              </div>
            </div> 
            
          </div>

            

          </div>
        </div>
      </div>
    </>
  );
}
