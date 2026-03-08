import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-luxury text-primary">404</h1>
        <p className="text-xl text-muted-foreground">Strona nie została odnaleziona</p>
        <Link href="/" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:brightness-110 transition-all">
          Wróć na stronę główną
        </Link>
      </div>
    </div>
  );
}
