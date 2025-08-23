export default function HeroBanner() {
  return (
    <div className="relative rounded-3xl overflow-hidden h-56 md:h-72 mb-8 animate-fade-in">
      <div className="absolute inset-0 animated-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-hero-gradient-start/80 via-hero-gradient-middle/60 to-hero-gradient-end/80"></div>
      <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-slide-up text-center">
              <h1 className="text-white text-3xl md:text-5xl font-exo font-bold mb-4 leading-tight">
                Temukan Produk Terbaik
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-6 font-light">
                Belanja online dengan pengalaman terbaik dan harga terjangkau
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-hero">
                  Mulai Belanja
                </button>
                <button className="btn-hero-outline">
                  Lihat Kategori
                </button>
              </div>
            </div>
          </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-xl floating-animation"></div>
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/5 rounded-full blur-lg floating-animation" style={{animationDelay: '2s'}}></div>
    </div>
  )
}