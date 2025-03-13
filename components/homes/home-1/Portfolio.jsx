"use client";
import { portfolioItems } from "@/data/portfolio";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const filters = [
  { name: "All Projects", category: "all" },
  { name: "Websites", category: "websites" },
  { name: "Mobile Apps", category: "apps" }
];

export default function Portfolio() {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [filtered, setFiltered] = useState(portfolioItems);

  useEffect(() => {
    if (currentCategory === "all") {
      setFiltered(portfolioItems);
    } else {
      setFiltered(
        portfolioItems.filter((item) =>
          item.categories.includes(currentCategory)
        )
      );
    }
  }, [currentCategory]);

  return (
    <div className="container">
      <div className="row mb-70 mb-sm-50">
        <div className="col-lg-8 offset-lg-2 text-center">
          <h2 className="section-title mb-30 mb-sm-20" style={{ textDecoration: 'underline' }}>Featured Projects</h2>
          <p className="section-descr" style={{ textDecoration: 'none' }}>
            Explore our portfolio of innovative web and mobile applications, showcasing our expertise in creating impactful digital solutions.
          </p>
        </div>
      </div>

      {/* Works Filter */}
      <div className="works-filter text-center mb-50 mb-sm-40">
        {filters.map((filter, index) => (
          <a
            key={index}
            onClick={() => setCurrentCategory(filter.category)}
            className={`filter ${currentCategory === filter.category ? "active" : ""}`}
            style={{ textDecoration: 'none' }}
          >
            {filter.name}
          </a>
        ))}
      </div>

      {/* Works Grid */}
      <div className="row">
        {filtered.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-60">
            <div className="work-grid-3-item" style={{
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              overflow: 'hidden',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <Link href={item.href} className="work-grid-3-link" style={{ 
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                <div style={{
                  background: '#f8f9fa',
                  padding: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Image
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    width={240}
                    height={180}
                    className="work-grid-3-image"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="work-grid-3-intro" style={{
                  padding: '24px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <h3 className="work-grid-3-title" style={{ 
                    textDecoration: 'none',
                    fontSize: '24px',
                    marginBottom: '8px'
                  }}>{item.title}</h3>
                  <div className="work-grid-3-descr" style={{ 
                    textDecoration: 'none',
                    color: '#666',
                    fontSize: '14px'
                  }}>{item.descr}</div>
                  <div className="work-grid-3-description" style={{ 
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '16px',
                    flex: 1
                  }}>{item.description}</div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
