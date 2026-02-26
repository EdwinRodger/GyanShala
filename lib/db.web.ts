// Web fallback for Expo SQLite + Drizzle.
// SQLite is not available in this Expo Web build, so any attempt
// to use the database will throw a clear runtime error.

type AnyDb = unknown;

export const db = new Proxy(
  {},
  {
    get() {
      throw new Error(
        'SQLite database is not available on the web build. Please run the app on a device or emulator to use offline storage.',
      );
    },
  },
) as AnyDb;

