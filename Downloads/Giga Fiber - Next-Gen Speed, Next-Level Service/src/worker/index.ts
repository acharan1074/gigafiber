import { Hono } from "hono";
import type { Env } from "../../worker-configuration";

const app = new Hono<{ Bindings: Env }>();

// Submit new connection request
app.post("/api/connection-requests", async (c) => {
  const body = await c.req.json();
  const {
    full_name,
    mobile_number,
    email,
    address,
    city,
    state,
    pincode,
    selected_plan,
    latitude,
    longitude,
    notes,
  } = body;

  if (!full_name || !mobile_number || !address) {
    return c.json({ error: "Missing required fields" }, 400);
  }

  const result = await c.env.DB!.prepare(
    `INSERT INTO connection_requests 
     (full_name, mobile_number, email, address, city, state, pincode, selected_plan, latitude, longitude, notes)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  )
    .bind(
      full_name,
      mobile_number,
      email || null,
      address,
      city || null,
      state || null,
      pincode || null,
      selected_plan || null,
      latitude || null,
      longitude || null,
      notes || null
    )
    .run();

  return c.json({ success: true, id: result.meta.last_row_id });
});

// Submit feedback
app.post("/api/feedback", async (c) => {
  const body = await c.req.json();
  const { name, mobile_number, email, rating, message } = body;

  if (!name || !mobile_number || !message) {
    return c.json({ error: "Missing required fields" }, 400);
  }

  const result = await c.env.DB!.prepare(
    `INSERT INTO feedback (name, mobile_number, email, rating, message)
     VALUES (?, ?, ?, ?, ?)`
  )
    .bind(name, mobile_number, email || null, rating || null, message)
    .run();

  return c.json({ success: true, id: result.meta.last_row_id });
});

// Submit complaint
app.post("/api/complaints", async (c) => {
  const body = await c.req.json();
  const { name, mobile_number, customer_id, complaint_type, subject, description } = body;

  if (!name || !mobile_number || !subject || !description) {
    return c.json({ error: "Missing required fields" }, 400);
  }

  const result = await c.env.DB!.prepare(
    `INSERT INTO complaints (name, mobile_number, customer_id, complaint_type, subject, description)
     VALUES (?, ?, ?, ?, ?, ?)`
  )
    .bind(
      name,
      mobile_number,
      customer_id || null,
      complaint_type || null,
      subject,
      description
    )
    .run();

  return c.json({ success: true, id: result.meta.last_row_id });
});

export default app;
