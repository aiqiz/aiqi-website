export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10">
      <div className="mx-auto max-w-4xl px-4 py-8 text-sm opacity-70">
        © {new Date().getFullYear()} Aiqi Zhang. All rights reserved.
      </div>
    </footer>
  )
}
