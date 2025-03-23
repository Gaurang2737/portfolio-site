import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertWaitlistSchema, 
  insertContactSchema, 
  insertNewsletterSchema 
} from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes - All prefixed with /api
  
  // Waitlist submission
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);
      
      // Check if email already exists
      const existingEntry = await storage.getWaitlistEntryByEmail(validatedData.email);
      if (existingEntry) {
        return res.status(409).json({
          message: "This email is already on the waitlist."
        });
      }
      
      const entry = await storage.createWaitlistEntry(validatedData);
      res.status(201).json({ 
        message: "Successfully added to waitlist!",
        id: entry.id
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const entry = await storage.createContactEntry(validatedData);
      res.status(201).json({ 
        message: "Message sent successfully!",
        id: entry.id
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  });

  // Newsletter signup
  app.post("/api/newsletter", async (req: Request, res: Response) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      
      // Check if email already exists
      const existingEntry = await storage.getNewsletterByEmail(validatedData.email);
      if (existingEntry) {
        return res.status(409).json({
          message: "This email is already subscribed to the newsletter."
        });
      }
      
      const entry = await storage.createNewsletterEntry(validatedData);
      res.status(201).json({ 
        message: "Successfully subscribed to the newsletter!",
        id: entry.id
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
