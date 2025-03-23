import { 
  users, type User, type InsertUser,
  waitlist, type Waitlist, type InsertWaitlist,
  contact, type Contact, type InsertContact,
  newsletter, type Newsletter, type InsertNewsletter
} from "@shared/schema";

// Interface for portfolio storage operations
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Waitlist methods
  createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist>;
  getWaitlistEntries(): Promise<Waitlist[]>;
  getWaitlistEntryByEmail(email: string): Promise<Waitlist | undefined>;

  // Contact methods
  createContactEntry(entry: InsertContact): Promise<Contact>;
  getContactEntries(): Promise<Contact[]>;

  // Newsletter methods
  createNewsletterEntry(entry: InsertNewsletter): Promise<Newsletter>;
  getNewsletterByEmail(email: string): Promise<Newsletter | undefined>;
}

// In-memory implementation of the storage interface
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlistEntries: Map<number, Waitlist>;
  private contactEntries: Map<number, Contact>;
  private newsletterEntries: Map<number, Newsletter>;
  private currentUserId: number;
  private currentWaitlistId: number;
  private currentContactId: number;
  private currentNewsletterId: number;

  constructor() {
    this.users = new Map();
    this.waitlistEntries = new Map();
    this.contactEntries = new Map();
    this.newsletterEntries = new Map();
    this.currentUserId = 1;
    this.currentWaitlistId = 1;
    this.currentContactId = 1;
    this.currentNewsletterId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Waitlist methods
  async createWaitlistEntry(insertEntry: InsertWaitlist): Promise<Waitlist> {
    const id = this.currentWaitlistId++;
    const createdAt = new Date();
    const entry: Waitlist = { ...insertEntry, id, createdAt };
    this.waitlistEntries.set(id, entry);
    return entry;
  }

  async getWaitlistEntries(): Promise<Waitlist[]> {
    return Array.from(this.waitlistEntries.values());
  }

  async getWaitlistEntryByEmail(email: string): Promise<Waitlist | undefined> {
    return Array.from(this.waitlistEntries.values()).find(
      (entry) => entry.email === email,
    );
  }

  // Contact methods
  async createContactEntry(insertEntry: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const createdAt = new Date();
    const entry: Contact = { ...insertEntry, id, createdAt };
    this.contactEntries.set(id, entry);
    return entry;
  }

  async getContactEntries(): Promise<Contact[]> {
    return Array.from(this.contactEntries.values());
  }

  // Newsletter methods
  async createNewsletterEntry(insertEntry: InsertNewsletter): Promise<Newsletter> {
    const id = this.currentNewsletterId++;
    const createdAt = new Date();
    const entry: Newsletter = { ...insertEntry, id, createdAt };
    this.newsletterEntries.set(id, entry);
    return entry;
  }

  async getNewsletterByEmail(email: string): Promise<Newsletter | undefined> {
    return Array.from(this.newsletterEntries.values()).find(
      (entry) => entry.email === email,
    );
  }
}

export const storage = new MemStorage();
