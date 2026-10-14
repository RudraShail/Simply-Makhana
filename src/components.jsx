import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  categories,
  company,
  googleReviews,
  initials,
  inr,
  instagramReviews,
  whatsappLink,
} from "./data.js";

export function media(src) {
  if (!src) return src;
  if (/^(https?:|data:|blob:)/.test(src)) return src;
  const base = import.meta.env.BASE_URL || "./";
  return `${base}${String(src).replace(/^\//, "")}`;
}

export function useTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} | Simply Makhana`
      : "Simply Makhana | Shree Balaji Organics";
  }, [title]);
}

export function Photo({ src, alt, className }) {
  const [current, setCurrent] = useState(() => media(src));
  useEffect(() => setCurrent(media(src)), [src]);
  return (
    <img
      src={current}
      alt={alt}
      className={className}
      onError={() => {
        const fallback = media("/images/cat-premium.jpg");
        if (current !== fallback) setCurrent(fallback);
      }}
    />
  );
}

export function Stars({ value = 5 }) {
  return (
    <span className="stars" aria-label={`${value} out of 5 stars`}>
      {"★★★★★".slice(0, value)}
      <span className="stars-dim">{"★★★★★".slice(value)}</span>
    </span>
  );
}

export function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-media">
        <Photo src={product.image} alt={product.name} />
        {product.badge ? <span className="badge">{product.badge}</span> : null}
      </Link>
      <div className="product-body">
        <p className="weight">{product.weight}</p>
        <h3>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="blurb">{product.blurb}</p>
        <div className="product-row">
          {product.upcoming ? (
            <strong className="soon-label">Launching soon</strong>
          ) : (
            <strong>
              {product.mrp ? <s className="mrp">{inr(product.mrp)}</s> : null}
              {inr(product.price)}
            </strong>
          )}
          <Link className="text-link" to={`/product/${product.id}`}>
            View
          </Link>
        </div>
      </div>
    </article>
  );
}

function mobileWarning(digits, required) {
  if (!digits) return required ? "Enter a 10-digit mobile number starting with 6, 7, 8, or 9." : "";
  if (!/^[6-9]/.test(digits)) return "This number must start with 6, 7, 8, or 9.";
  if (digits.length !== 10) {
    return required ? "Enter all 10 digits. The number must start with 6, 7, 8, or 9." : "";
  }
  return "";
}

function emailWarning(raw, required) {
  const email = raw.trim();
  if (!email) return required ? "Enter a valid email address." : "";
  const looksFinished = /@/.test(email) && /\.[A-Za-z]{2,}$/.test(email);
  if (!required && !looksFinished) return "";
  if (!isValidEmail(email)) {
    return "Enter a valid email, such as name@gmail.com, name@icloud.com, or name@company.com.";
  }
  return "";
}

function isValidEmail(email) {
  if (email.length < 6 || email.length > 254) return false;
  const pattern =
    /^[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,62}[A-Za-z0-9])?@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z]{2,24})+$/;
  if (!pattern.test(email)) return false;
  const domain = email.slice(email.indexOf("@") + 1).toLowerCase();
  return domain.includes(".") && !domain.includes("..");
}

export function EnquiryForm({ interest = "" }) {
  const [values, setValues] = useState({
    name: "",
    place: "",
    mobile: "",
    email: "",
    note: interest,
    company: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [waUrl, setWaUrl] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (interest) setValues((v) => ({ ...v, note: interest }));
  }, [interest]);

  function setField(key, value) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function onMobile(raw) {
    let digits = raw.replace(/\D/g, "");
    if (digits.length > 10 && digits.startsWith("91")) digits = digits.slice(-10);
    if (digits.startsWith("0")) digits = digits.replace(/^0+/, "");
    digits = digits.slice(0, 10);
    setField("mobile", digits);
    setErrors((prev) => {
      const next = { ...prev };
      const warning = mobileWarning(digits, false);
      if (warning) next.mobile = warning;
      else delete next.mobile;
      return next;
    });
  }

  function onEmail(raw) {
    setField("email", raw);
    setErrors((prev) => {
      const next = { ...prev };
      const warning = emailWarning(raw, false);
      if (warning) next.email = warning;
      else delete next.email;
      return next;
    });
  }

  function validate() {
    const next = {};
    const name = values.name.trim();
    const place = values.place.trim();
    const email = values.email.trim();
    if (!/^[A-Za-z][A-Za-z .'-]{1,70}$/.test(name) || name.length < 3) {
      next.name = "Enter your full name using letters.";
    }
    if (place.length < 2) next.place = "Enter your city or locality.";
    const mobile = mobileWarning(values.mobile, true);
    if (mobile) next.mobile = mobile;
    const mail = emailWarning(email, true);
    if (mail) next.email = mail;
    return next;
  }

  async function onSubmit(event) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    if (values.company) {
      setStatus("sent");
      return;
    }

    const message = [
      "New enquiry from the Simply Makhana website",
      `Name: ${values.name.trim()}`,
      `Place: ${values.place.trim()}`,
      `Mobile: ${values.mobile}`,
      `Email: ${values.email.trim()}`,
      `Message: ${values.note.trim() || "General enquiry"}`,
    ].join("\n");

    const url = whatsappLink(message);
    setWaUrl(url);

    const emailTask = fetch("https://formsubmit.co/ajax/info@shreebalajiorganics.com", {
      method: "POST",
      keepalive: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: values.name.trim(),
        place: values.place.trim(),
        mobile: values.mobile,
        email: values.email.trim(),
        message: values.note.trim() || "General enquiry",
        _subject: `Simply Makhana enquiry — ${values.name.trim()}`,
        _template: "table",
        _captcha: "false",
        _replyto: values.email.trim(),
      }),
    })
      .then((response) => response.ok)
      .catch(() => false);

    const popup = window.open(url, "_blank", "noopener,noreferrer");
    setStatus("sending");
    const emailed = await emailTask;
    const nextStatus = !popup
      ? emailed
        ? "sent-blocked"
        : "partial-blocked"
      : emailed
        ? "sent"
        : "partial";
    setStatus(nextStatus);
    if (nextStatus === "sent" || nextStatus === "sent-blocked") {
      setNotice("Your query has been sent to the team.");
    }
  }

  if (status.startsWith("sent") || status.startsWith("partial")) {
    const emailed = status.startsWith("sent");
    return (
      <div className="form-success" role="status">
        {notice ? (
          <div className="query-toast" role="status" aria-live="polite">
            <span className="query-toast-mark" aria-hidden="true">
              ✓
            </span>
            <div>
              <strong>Query sent to the team</strong>
              <p>{notice}</p>
            </div>
            <button type="button" onClick={() => setNotice("")} aria-label="Close notification">
              ×
            </button>
          </div>
        ) : null}
        <p className="eyebrow">Enquiry received</p>
        <h3>Query sent to the team.</h3>
        <p>
          {emailed
            ? `Thank you, ${values.name.trim().split(" ")[0]}. Shree Balaji Organics has your query by email at ${company.email}, and WhatsApp opened for ${company.phoneDisplay}. Tap Send in that chat so the message reaches the phone.`
            : `WhatsApp opened for ${company.phoneDisplay}. Tap Send there. If the email did not leave, use the button below to send the same query to ${company.email}.`}
        </p>
        {waUrl ? (
          <a className="btn btn-green" href={waUrl} target="_blank" rel="noreferrer">
            Open WhatsApp
          </a>
        ) : null}
        <a
          className="btn btn-ghost"
          href={`mailto:${company.email}?subject=${encodeURIComponent(
            `Simply Makhana enquiry — ${values.name.trim()}`
          )}&body=${encodeURIComponent(
            `Name: ${values.name.trim()}\nPlace: ${values.place.trim()}\nMobile: ${values.mobile}\nEmail: ${values.email.trim()}\nMessage: ${values.note.trim() || "General enquiry"}`
          )}`}
        >
          Email this enquiry
        </a>
      </div>
    );
  }

  return (
    <form className="enquiry" onSubmit={onSubmit} noValidate>
      <div className="hp" aria-hidden="true">
        <label>
          Company
          <input
            tabIndex={-1}
            autoComplete="off"
            value={values.company}
            onChange={(e) => setField("company", e.target.value)}
          />
        </label>
      </div>
      <label>
        Full name
        <input
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(e) => setField("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
          placeholder="Your full name"
        />
        {errors.name ? <small>{errors.name}</small> : null}
      </label>
      <label>
        Place
        <input
          name="place"
          autoComplete="address-level2"
          value={values.place}
          onChange={(e) => setField("place", e.target.value)}
          aria-invalid={Boolean(errors.place)}
          placeholder="City or locality"
        />
        {errors.place ? <small>{errors.place}</small> : null}
      </label>
      <label>
        Mobile number
        <input
          name="tel"
          inputMode="numeric"
          autoComplete="tel"
          maxLength={10}
          value={values.mobile}
          onChange={(e) => onMobile(e.target.value)}
          aria-invalid={Boolean(errors.mobile)}
          placeholder="10-digit mobile"
        />
        {errors.mobile ? <small>{errors.mobile}</small> : <small className="hint">10 digits only, starting with 6, 7, 8, or 9.</small>}
      </label>
      <label>
        Email id
        <input
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => onEmail(e.target.value)}
          onBlur={(e) => {
            const warning = emailWarning(e.target.value, true);
            setErrors((prev) => {
              const next = { ...prev };
              if (warning && e.target.value.trim()) next.email = warning;
              else if (!warning) delete next.email;
              return next;
            });
          }}
          aria-invalid={Boolean(errors.email)}
          placeholder="you@gmail.com"
        />
        {errors.email ? <small>{errors.email}</small> : null}
      </label>
      <label className="full">
        What would you like?
        <textarea
          name="message"
          rows={4}
          maxLength={400}
          value={values.note}
          onChange={(e) => setField("note", e.target.value)}
          placeholder="A product, a hamper, or a question"
        />
      </label>
      <div className="full form-actions">
        <button className="btn btn-green" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send to Shree Balaji Organics"}
        </button>
        <p className="hint">
          You will get a reply on WhatsApp at {company.phoneDisplay} and by email at {company.email}.
        </p>
      </div>
    </form>
  );
}

function IgCard({ review, hidden = false }) {
  return (
    <article className="ig-card" aria-hidden={hidden || undefined}>
      <header>
        <span className="avatar" aria-hidden="true">
          {initials(review.name)}
        </span>
        <div>
          <strong>{review.name}</strong>
          <small>{review.place}</small>
        </div>
        <span className="ig-mark">Instagram</span>
      </header>
      <Photo src={review.image} alt={hidden ? "" : `${review.name} on Simply Makhana`} />
      <p>{review.text}</p>
    </article>
  );
}

function GoogleCard({ review, hidden = false }) {
  return (
    <article className="g-card" aria-hidden={hidden || undefined}>
      <header>
        <span className="avatar g">{initials(review.name)}</span>
        <div>
          <strong>{review.name}</strong>
          <small>{review.place}</small>
        </div>
        <span className="g-mark">Google</span>
      </header>
      <Stars value={review.stars} />
      <p>{review.text}</p>
    </article>
  );
}

const instagramPhotos = [
  { src: "/images/ig-feed-1.jpg", alt: "A woman at home holding a Simply Makhana pouch" },
  { src: "/images/ig-feed-2.jpg", alt: "A woman in a doorway holding a Simply Makhana pouch" },
  { src: "/images/pouch.jpg", alt: "Simply Makhana premium pouch beside a wooden bowl of fox nuts", pack: true },
  { src: "/images/ig-feed-3.jpg", alt: "A woman in a kitchen holding a Simply Makhana pouch" },
  { src: "/images/ig-feed-4.jpg", alt: "A woman holding a Simply Makhana pouch toward the camera" },
  { src: "/images/pouch-mithila.jpg", alt: "Simply Makhana pouch with a bowl of jumbo fox nuts", pack: true },
  { src: "/images/ig-feed-5.jpg", alt: "A woman in a floral scarf holding a Simply Makhana pouch" },
  { src: "/images/cookie-sf-front.jpg", alt: "Simply Makhana sugar-free makhana and millet cookie box", pack: true },
  { src: "/images/ig-feed-6.jpg", alt: "A man at a table with a Simply Makhana pouch and a bowl of fox nuts" },
];

export function InstagramPhotoFeed() {
  const loop = [...instagramPhotos, ...instagramPhotos];
  return (
    <div className="ig-feed-block">
      <div className="ig-feed-head">
        <h2>
          <span>Instagram</span> feed
        </h2>
        <a className="ig-follow" href={company.instagram} target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.4 6.9a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9z"
            />
          </svg>
          Follow us
        </a>
      </div>
      <div className="ig-photos">
        <div className="ig-photos-track">
          {loop.map((photo, index) => (
            <img
              key={`${photo.src}-${index}`}
              src={media(photo.src)}
              alt={index < instagramPhotos.length ? photo.alt : ""}
              className={photo.pack ? "pack" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function InstagramGrid() {
  return (
    <div className="ticker ticker-ig">
      <div className="ticker-track">
        {instagramReviews.map((review) => (
          <IgCard key={review.name + review.place} review={review} />
        ))}
        {instagramReviews.map((review) => (
          <IgCard key={`${review.name}-copy`} review={review} hidden />
        ))}
      </div>
    </div>
  );
}

export function GoogleGrid() {
  const reviews = googleReviews.slice(0, 5);
  return (
    <div className="ticker ticker-g">
      <div className="ticker-track">
        {reviews.map((review) => (
          <GoogleCard key={review.name} review={review} />
        ))}
        {reviews.map((review) => (
          <GoogleCard key={`${review.name}-copy`} review={review} hidden />
        ))}
      </div>
    </div>
  );
}

function SocialIcon({ name, glyph = false }) {
  if (glyph) {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path
          fill="currentColor"
          d="M24 11.2c-7.1 0-12.8 5.7-12.8 12.8 0 2.3.6 4.4 1.7 6.3L11.2 38l7.9-2.1c1.8.9 3.8 1.4 5.9 1.4 7.1 0 12.8-5.7 12.8-12.8S31.1 11.2 24 11.2zm7.4 18.2c-.3.8-1.5 1.6-2.5 1.8-.6.1-1.5.2-4.4-.9-3.7-1.5-6.1-5.3-6.3-5.5-.2-.2-1.5-2-1.5-3.8 0-1.8.9-2.7 1.3-3.1.3-.3.7-.5 1-.5h.7c.2 0 .5 0 .8.6.3.7 1 2.5 1.1 2.7.1.2.1.4 0 .6-.1.2-.2.4-.3.6l-.5.6c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.8 1.8.4.2.6.1.8-.1.2-.2.9-1 1.1-1.4.2-.3.5-.3.8-.2.3.1 1.9.9 2.3 1.1.3.2.5.2.6.4.1.1.1.8-.2 1.6z"
        />
      </svg>
    );
  }
  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <defs>
          <radialGradient id="ig-badge" cx="30%" cy="108%" r="130%">
            <stop offset="0%" stopColor="#feda75" />
            <stop offset="28%" stopColor="#fa7e1e" />
            <stop offset="52%" stopColor="#d62976" />
            <stop offset="76%" stopColor="#962fbf" />
            <stop offset="100%" stopColor="#4f5bd5" />
          </radialGradient>
        </defs>
        <rect width="48" height="48" rx="14" fill="url(#ig-badge)" />
        <rect x="13" y="13" width="22" height="22" rx="6" fill="none" stroke="#fff" strokeWidth="2.4" />
        <circle cx="24" cy="24" r="5.2" fill="none" stroke="#fff" strokeWidth="2.4" />
        <circle cx="30.6" cy="17.4" r="1.5" fill="#fff" />
      </svg>
    );
  }
  if (name === "YouTube") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="2" y="10" width="44" height="28" rx="8" fill="#ff0000" />
        <path fill="#fff" d="M20 17.5v13l12-6.5z" />
      </svg>
    );
  }
  if (name === "Facebook") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="24" fill="#1877f2" />
        <path
          fill="#fff"
          d="M26.8 38V25.4h4.2l.6-4.8h-4.8v-3.1c0-1.4.4-2.3 2.4-2.3h2.6v-4.3c-.5-.1-2-.2-3.8-.2-3.8 0-6.4 2.3-6.4 6.6v3.3h-4.3v4.8h4.3V38h5.2z"
        />
      </svg>
    );
  }
  if (name === "LinkedIn") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect width="48" height="48" rx="10" fill="#0a66c2" />
        <path
          fill="#fff"
          d="M14.2 19.2h4.4V34h-4.4V19.2zM16.4 13.4a2.55 2.55 0 1 1 0 5.1 2.55 2.55 0 0 1 0-5.1zM21.8 19.2h4.2v2h.1c.6-1.1 2-2.3 4.2-2.3 4.5 0 5.3 3 5.3 6.8V34h-4.4v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V34h-4.4V19.2z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="#25d366" />
      <path
        fill="#fff"
        d="M24 11.2c-7.1 0-12.8 5.7-12.8 12.8 0 2.3.6 4.4 1.7 6.3L11.2 38l7.9-2.1c1.8.9 3.8 1.4 5.9 1.4 7.1 0 12.8-5.7 12.8-12.8S31.1 11.2 24 11.2zm7.4 18.2c-.3.8-1.5 1.6-2.5 1.8-.6.1-1.5.2-4.4-.9-3.7-1.5-6.1-5.3-6.3-5.5-.2-.2-1.5-2-1.5-3.8 0-1.8.9-2.7 1.3-3.1.3-.3.7-.5 1-.5h.7c.2 0 .5 0 .8.6.3.7 1 2.5 1.1 2.7.1.2.1.4 0 .6-.1.2-.2.4-.3.6l-.5.6c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.8 1.8.4.2.6.1.8-.1.2-.2.9-1 1.1-1.4.2-.3.5-.3.8-.2.3.1 1.9.9 2.3 1.1.3.2.5.2.6.4.1.1.1.8-.2 1.6z"
      />
    </svg>
  );
}

export function MapFrame() {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&z=16&output=embed`;
  return (
    <iframe
      className="map"
      title="Map of Shree Balaji Organics, Botanical Garden, Howrah"
      src={src}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
    setShopOpen(false);
  }, [location.pathname]);

  function onSearch(event) {
    event.preventDefault();
    navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
    setOpen(false);
  }

  return (
    <div className="sticky">
      <header className="header">
        <Link to="/" className="brand">
          <img src={media("/images/logo.jpg")} alt="Simply Makhana wreath logo" />
          <span>
            <strong>Simply Makhana</strong>
            <small>Shree Balaji Organics</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={open ? "nav open" : "nav"}>
          <NavLink to="/" end>
            Home
          </NavLink>
          <div className={shopOpen ? "drop open" : "drop"}>
            <button type="button" onClick={() => setShopOpen((v) => !v)}>
              Shop
            </button>
            <div className="drop-panel">
              <Link to="/shop">All products</Link>
              {categories.map((category) => (
                <Link key={category.slug} to={`/category/${category.slug}`}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/reviews">Reviews</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <form className="nav-search" onSubmit={onSearch}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search makhana, cookies…"
              aria-label="Search products"
            />
          </form>
          <Link className="btn btn-green small" to="/contact">
            Enquire
          </Link>
        </nav>
      </header>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <p className="script-mark">Simply Makhana</p>
          <p>{company.name}</p>
          <p>{company.address}</p>
        </div>
        <div>
          <h2>Visit & write</h2>
          <p>
            <a href={`tel:+${company.phoneIntl}`}>{company.phoneDisplay}</a>
          </p>
          <p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <p>{company.hours}</p>
        </div>
        <div>
          <h2>Shop</h2>
          {categories.map((category) => (
            <p key={category.slug}>
              <Link to={`/category/${category.slug}`}>{category.name}</Link>
            </p>
          ))}
        </div>
        <div className="footer-socials">
          <div className="socials">
            <a href={company.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <SocialIcon name="Instagram" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
              <SocialIcon name="YouTube" />
            </a>
            <a href={company.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <SocialIcon name="Facebook" />
            </a>
            <a href={company.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <SocialIcon name="LinkedIn" />
            </a>
            <a
              href={whatsappLink("Hello Simply Makhana, I would like to know more about your products.")}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <SocialIcon name="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-base">
        <span>© {new Date().getFullYear()} {company.name}</span>
        <span>Simply Makhana · Howrah 711103</span>
      </div>
    </footer>
  );
}

export function Layout() {
  const hello = whatsappLink(
    "Hello Simply Makhana, I would like to know more about your products."
  );
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <a className="wa-float" href={hello} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <SocialIcon name="WhatsApp" glyph />
      </a>
    </>
  );
}
