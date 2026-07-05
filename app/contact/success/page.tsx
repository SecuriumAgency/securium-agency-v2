export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center bg-zinc-900/40 p-12 rounded-3xl border border-white/5 backdrop-blur-md">
        <h1 className="text-4xl font-bold text-white mb-6">Demande reçue.</h1>
        <p className="text-zinc-400 mb-8">Je reviens vers vous dans les plus brefs délais pour discuter de votre projet.</p>
        <a href="/" className="text-brand-500 font-bold hover:underline">Retour à l&apos;accueil</a>
      </div>
    </main>
  );
}
