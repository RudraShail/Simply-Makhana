import { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  EnquiryForm,
  GoogleGrid,
  InstagramGrid,
  InstagramPhotoFeed,
  MapFrame,
  Photo,
  ProductCard,
  media,
  useTitle,
} from "./components.jsx";
import {
  categories,
  company,
  getCategory,
  getProduct,
  inr,
  orderMessage,
  products,
  productsByCategory,
  whatsappLink,
  whyProducts,
  whyUs,
} from "./data.js";

function SectionHead({ eyebrow, title, lede, action }) {
  return (
    <div className="section-head">
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {lede ? <p>{lede}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function Home() {
  useTitle("");
  const featured = products.filter((item) => item.featured);
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Shree Balaji Organics</p>
          <h1>
            <span>Simply</span> Makhana
          </h1>
          <p className="lede">
            Phool makhana from Mithila’s ponds, and makhana & millet cookies with no added sugar.
            Packed at Botanical Garden, Howrah.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-green" to="/category/premium-makhana">
              Shop makhana
            </Link>
            <Link className="btn btn-ghost" to="/category/makhana-cookies">
              See the cookies
            </Link>
          </div>
          <ul className="hero-facts">
            <li>
              <strong>0 g</strong>
              <span>total sugar in plain makhana, per 100g</span>
            </li>
            <li>
              <strong>9.63 g</strong>
              <span>protein in plain makhana, per 100g</span>
            </li>
            <li>
              <strong>0 g</strong>
              <span>added sugar in the sugar-free cookie</span>
            </li>
          </ul>
        </div>
        <div className="hero-frame">
          <Photo src="/images/hero-makhana.jpg" alt="Wooden bowl of white phool makhana" />
          <div className="hero-card">
            <img src={media("/images/logo.jpg")} alt="" />
            <p>Directly from Mithila’s ponds</p>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHead
          eyebrow="Our products"
          title="Choose a category"
          lede="Makhana by pack and sutta grade, cookies, and the products launching soon."
          action={
            <Link className="text-link" to="/shop">
              Browse the shelf
            </Link>
          }
        />
        <div className="cat-grid">
          {categories.map((category, index) => (
            <Link className="cat-card" key={category.slug} to={`/category/${category.slug}`}>
              <Photo src={category.image} alt="" />
              <div>
                <span>0{index + 1}</span>
                <h3>{category.name}</h3>
                <p>{category.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <SectionHead
          eyebrow="On the table"
          title="A few places to start"
          lede="Packed makhana, loose and bulk grades, and the cookies on sale now."
        />
        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHead
          eyebrow="Launching soon"
          title="Coming to the shelf"
          lede="Flavoured makhana, pasta, flour, kheer, chips, and papad. These are not on sale yet."
          action={
            <Link className="text-link" to="/category/launching-soon">
              See what is next
            </Link>
          }
        />
        <div className="product-grid">
          {products
            .filter((item) => item.upcoming)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>

      <section className="story">
        <Photo src="/images/pouch-mithila.jpg" alt="Simply Makhana premium pouch beside a bowl of fox nuts" />
        <div>
          <p className="eyebrow">About us</p>
          <h2>Finest makhana from the Mithila region of Bihar.</h2>
          <p>
            Shree Balaji Organics, under its premium brand Simply Makhana, brings you the finest
            quality makhana sourced from the best farms from Mithila region of Bihar (India). We
            combine purity, nutrition, and superior taste to create a healthy snacking experience.
          </p>
          <p>
            With a strong focus on quality, hygiene, and consistency, we cater to both domestic and
            international markets, ensuring every pack delivers freshness and excellence.
          </p>
          <Link className="btn btn-brown" to="/about">
            Read about us
          </Link>
        </div>
      </section>

      <section className="section section-tint">
        <SectionHead
          eyebrow="Why this house"
          title="Why we are the better choice beside other makhana."
          lede="A shop you can visit, numbers that match the pack, and products built from the same fox nut."
          action={
            <Link className="text-link" to="/about">
              See the full story
            </Link>
          }
        />
        <div className="reason-grid">
          {whyUs.map((item) => (
            <article className="reason-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <InstagramPhotoFeed />
        <SectionHead
          title="Twenty notes from people who ate the bowl and asked for another"
          lede="They write about the crunch that stays, a pouch that arrives whole, plain makhana beside evening chai, and the sugar-free cookie they keep in the tin."
        />
        <InstagramGrid />
      </section>

      <section className="section section-tint">
        <SectionHead title="Google reviews" />
        <GoogleGrid />
      </section>

      <section className="section contact-band" id="enquire">
        <div>
          <p className="eyebrow">Write to the seller</p>
          <h2>Tell us what you want packed.</h2>
          <p>
            {company.name}
            <br />
            {company.address}
          </p>
          <p>
            <a href={`tel:+${company.phoneIntl}`}>{company.phoneDisplay}</a>
            <br />
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <MapFrame />
        </div>
        <EnquiryForm />
      </section>
    </>
  );
}

export function Shop() {
  useTitle("Shop");
  const [params, setParams] = useSearchParams();
  const q = (params.get("q") || "").trim().toLowerCase();
  const cat = params.get("cat") || "all";
  const list = useMemo(() => {
    return products.filter((product) => {
      const category = getCategory(product.category);
      const hay = `${product.name} ${product.blurb} ${product.weight} ${category?.name || ""}`.toLowerCase();
      const matchesQuery = !q || hay.includes(q);
      const matchesCat = cat === "all" || product.category === cat;
      return matchesQuery && matchesCat;
    });
  }, [q, cat]);

  function setCat(slug) {
    const next = new URLSearchParams(params);
    if (slug === "all") next.delete("cat");
    else next.set("cat", slug);
    setParams(next);
  }

  return (
    <section className="section page-top">
      <SectionHead
        eyebrow="The full shelf"
        title={q ? `Results for “${params.get("q")}”` : "All products"}
        lede={`${list.filter((product) => !product.upcoming).length} on sale now, ${list.filter((product) => product.upcoming).length} launching soon.`}
      />
      <div className="chips">
        <button type="button" className={cat === "all" ? "on" : ""} onClick={() => setCat("all")}>
          All
        </button>
        {categories.map((category) => (
          <button
            type="button"
            key={category.slug}
            className={cat === category.slug ? "on" : ""}
            onClick={() => setCat(category.slug)}
          >
            {category.name}
          </button>
        ))}
      </div>
      {list.length ? (
        <div className="product-grid">
          {list.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="empty">Nothing matches that search. Try makhana, sutta, cookie, or flour.</p>
      )}
    </section>
  );
}

export function CategoryPage() {
  const { slug } = useParams();
  const category = getCategory(slug);
  const list = category ? productsByCategory(slug) : [];
  useTitle(category ? category.name : "Category");
  if (!category) {
    return (
      <section className="section page-top">
        <h1>That shelf is not on this site.</h1>
        <Link to="/shop">Back to the shop</Link>
      </section>
    );
  }
  return (
    <>
      <section className="cat-hero">
        <Photo src={category.image} alt="" />
        <div>
          <p className="eyebrow">Category</p>
          <h1>{category.name}</h1>
          <p>{category.tagline}</p>
          <p className="count">
            {category.slug === "launching-soon"
              ? `${list.length} products · launching soon`
              : `${list.length} products`}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="product-grid">
          {list.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export function ProductPage() {
  const { id } = useParams();
  const product = getProduct(id);
  const [qty, setQty] = useState(1);
  const [shot, setShot] = useState(0);
  useTitle(product ? product.name : "Product");
  useEffect(() => {
    setShot(0);
  }, [id]);
  if (!product) {
    return (
      <section className="section page-top">
        <h1>We could not find that product.</h1>
        <Link to="/shop">Browse the shop</Link>
      </section>
    );
  }
  const category = getCategory(product.category);
  const related = productsByCategory(product.category).filter((item) => item.id !== product.id).slice(0, 4);
  const interest = `${product.name} (${product.weight}) × ${qty}`;
  const shots = product.gallery?.length ? product.gallery : [product.image];
  return (
    <>
      <article className="product-page section page-top">
        <div className="product-shots">
          <img src={media(shots[shot] || product.image)} alt={product.name} />
          {shots.length > 1 ? (
            <div className="shot-row">
              {shots.map((src, index) => (
                <button
                  type="button"
                  key={src}
                  className={index === shot ? "on" : ""}
                  onClick={() => setShot(index)}
                  aria-label={`Photo ${index + 1} of ${product.name}`}
                >
                  <img src={media(src)} alt="" />
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div>
          <p className="eyebrow">
            <Link to={`/category/${category.slug}`}>{category.name}</Link>
          </p>
          <h1>{product.name}</h1>
          <dl className="spec">
            <div>
              <dt>Weight</dt>
              <dd>{product.weight}</dd>
            </div>
            <div>
              <dt>Price</dt>
              <dd>{product.upcoming ? "Launching soon" : `${inr(product.price)} selling price`}</dd>
            </div>
            {product.mrp ? (
              <div>
                <dt>MRP</dt>
                <dd>
                  <s>{inr(product.mrp)}</s>
                </dd>
              </div>
            ) : null}
            <div>
              <dt>Nutrition</dt>
              <dd>{product.nutrition ? product.nutrition.title : "Printed on the pack when this launches"}</dd>
            </div>
          </dl>
          {product.upcoming ? (
            <p className="price-lg">
              <span className="soon-label">Launching soon</span>
            </p>
          ) : (
            <p className="price-lg">
              {inr(product.price)} <small>{product.weight}</small>
              {product.mrp ? (
                <span className="mrp-note">
                  <s>MRP {inr(product.mrp)}</s>
                </span>
              ) : null}
            </p>
          )}
          <p className="lede">{product.blurb}</p>
          <ul className="points">
            {product.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          {product.upcoming ? null : (
            <div className="qty">
              <span>Quantity</span>
              <button type="button" onClick={() => setQty((n) => Math.max(1, n - 1))} aria-label="Decrease quantity">
                −
              </button>
              <strong>{qty}</strong>
              <button type="button" onClick={() => setQty((n) => Math.min(20, n + 1))} aria-label="Increase quantity">
                +
              </button>
            </div>
          )}
          <div className="hero-actions">
            {product.upcoming ? (
              <Link className="btn btn-green" to={`/contact?product=${encodeURIComponent(product.name + " — launching soon")}`}>
                Ask when this launches
              </Link>
            ) : (
              <>
                <a className="btn btn-green" href={whatsappLink(orderMessage(product, qty))} target="_blank" rel="noreferrer">
                  Order on WhatsApp
                </a>
                <Link className="btn btn-ghost" to={`/contact?product=${encodeURIComponent(interest)}`}>
                  Send an enquiry
                </Link>
              </>
            )}
          </div>
          {product.details?.map((line) => (
            <p key={line}>{line}</p>
          ))}
          {product.ingredients ? (
            <p>
              <strong>Ingredients. </strong>
              {product.ingredients}
            </p>
          ) : null}
          {product.allergens ? <p className="allergen">{product.allergens}</p> : null}
          {product.nutrition ? (
            <table className="nutrition">
              <caption>{product.nutrition.title}</caption>
              <tbody>
                {product.nutrition.rows.map(([label, value]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
          {product.nutrition?.note ? <p className="hint">{product.nutrition.note}</p> : null}
        </div>
      </article>
      <section className="section">
        <SectionHead eyebrow="Same shelf" title={`More ${category.name}`} />
        <div className="product-grid">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export function About() {
  useTitle("About us");
  return (
    <>
      <section className="section page-top about">
        <div>
          <p className="eyebrow">Shree Balaji Organics</p>
          <h1>About us</h1>
          <p>
            Welcome to Shree Balaji Organics, the proud home of Simply Makhana — a brand dedicated to
            delivering excellence in every bite.
          </p>
          <p>
            Rooted in quality and driven by passion, we specialize in sourcing and supplying the
            finest grade of makhana (fox nuts), carefully selected from the most renowned growing
            regions of Bihar (India). Our products reflect a perfect balance of purity, taste, and
            nutrition, crafted to meet the expectations of modern, health-conscious consumers across
            the globe.
          </p>
          <p>
            Under our flagship brand Simply Makhana, we redefine traditional snacking by combining
            authenticity with a premium experience. Every batch is meticulously processed and
            hygienically packed using advanced techniques to preserve its natural crunch, flavor,
            and nutritional richness.
          </p>
          <p>
            With a strong presence in both domestic and international markets, Shree Balaji Organics
            is actively engaged in export operations, ensuring seamless global trade and consistent
            supply. Our commitment to international quality standards and reliable logistics has
            helped us build lasting relationships with partners worldwide.
          </p>
          <p>
            At Shree Balaji Organics, we believe that true luxury lies in purity and trust. Our
            mission is to offer not just a product, but an experience that reflects quality,
            integrity, and wellness.
          </p>
          <p>
            We invite you to be a part of our journey towards healthier living with Simply Makhana —
            where tradition meets sophistication.
          </p>
        </div>
        <div className="about-photos">
          <Photo src="/images/bowl-wood.jpg" alt="Bowl of plain makhana" />
          <Photo src="/images/cookies-front.jpg" alt="Simply Makhana sugar-free cookie box" />
          <Photo src="/images/nutrition-makhana.jpg" alt="Nutrition facts for plain makhana per 100 grams" />
          <Photo src="/images/pack-back.jpg" alt="Back of the cookie pack with ingredients and nutrition" />
        </div>
      </section>

      <section className="section section-tint">
        <div className="pond-story">
          <h2 className="pond-line">From the Ponds of Mithila to Your Kitchen</h2>
          <p>
            In the heart of Mithila, Bihar, makhana cultivation is a tradition passed down through
            generations. Grown in natural ponds and harvested with care by hardworking farmers,
            makhana represents the rich agricultural heritage of our region.
          </p>
          <p>
            At <strong>Shree Balaji Organics</strong>, through our brand <strong>Simply Makhana</strong>,
            we bring this traditional superfood to your kitchen with a commitment to quality, hygiene,
            and taste.
          </p>
          <p>
            From premium raw and flavoured makhana to makhana cookies, pasta, and flour, we are
            making healthy and delicious choices accessible to every household while supporting the
            farming community.
          </p>
          <p className="pond-mark">Simply Makhana — Tradition Meets Nutrition.</p>
          <p className="pond-close">Rooted in Mithila. Made for Every Kitchen.</p>
        </div>
      </section>

      <section className="section">
        <SectionHead
          eyebrow="Beside other brands"
          title="Why we are the better choice."
          lede="Other pouches can look the same on a shelf. These are the differences you can check."
        />
        <div className="reason-grid">
          {whyUs.map((item) => (
            <article className="reason-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <SectionHead
          eyebrow="The products"
          title="Why these products are the better eat."
          lede="Every pack starts from the same fox nut. The difference is how we finish it."
        />
        <div className="reason-grid">
          {whyProducts.map((item) => (
            <article className="reason-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function ReviewsPage() {
  useTitle("Reviews");
  return (
    <section className="section page-top">
      <SectionHead
        eyebrow="Kind words"
        title="Words from people who ate the bowl"
        lede="Twenty Instagram notes and Google reviews, on the crunch, the packing, the plain makhana, and the sugar-free cookie."
      />
      <InstagramPhotoFeed />
      <h2 className="subhead">Instagram · twenty notes</h2>
      <InstagramGrid />
      <h2 className="subhead">Google</h2>
      <GoogleGrid />
    </section>
  );
}

export function ContactPage() {
  useTitle("Contact");
  const [params] = useSearchParams();
  const interest = params.get("product") || "";
  return (
    <section className="section page-top contact-band">
      <div>
        <p className="eyebrow">Contact the seller</p>
        <h1>Shree Balaji Organics</h1>
        <p>{company.address}</p>
        <p>
          <a href={`tel:+${company.phoneIntl}`}>{company.phoneDisplay}</a>
          <br />
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
        <p>{company.hours}</p>
        <MapFrame />
      </div>
      <div>
        <h2>Send an enquiry</h2>
        <p>Full name, place, a 10-digit mobile number, and email. We reply on WhatsApp and email.</p>
        <EnquiryForm interest={interest} />
      </div>
    </section>
  );
}

export function NotFound() {
  useTitle("Page not found");
  return (
    <section className="section page-top">
      <h1>This page is not on the shelf.</h1>
      <Link className="btn btn-green" to="/">
        Back home
      </Link>
    </section>
  );
}
