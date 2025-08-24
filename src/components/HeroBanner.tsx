export default function HeroBanner() {
  return (
    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-48 md:h-72 mb-6 md:mb-8 animate-fade-in mx-2 md:mx-0">
      <div className="absolute inset-0 animated-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-hero-gradient-start/80 via-hero-gradient-middle/60 to-hero-gradient-end/80"></div>
      <div className="relative h-full flex items-center justify-center text-center px-4 md:px-6">
        <div className="w-full max-w-4xl mx-auto animate-slide-up text-center">
          <h1 className="text-white text-2xl md:text-5xl font-exo font-bold mb-3 md:mb-4 leading-tight">
            Temukan Produk Terbaik
          </h1>
          <p className="text-white/90 text-sm md:text-xl mb-4 md:mb-6 font-light px-4">
            Belanja online dengan pengalaman terbaik dan harga terjangkau
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <button className="btn-hero text-sm md:text-base py-2.5 md:py-3">
              Mulai Belanja
            </button>
            <button className="btn-hero-outline text-sm md:text-base py-2.5 md:py-3">
              Lihat Kategori
            </button>
          </div>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-2 right-2 md:top-4 md:right-4 w-16 h-16 md:w-32 md:h-32 bg-white/10 rounded-full blur-xl floating-animation"></div>
      <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 w-12 h-12 md:w-24 md:h-24 bg-white/5 rounded-full blur-lg floating-animation" style={{animationDelay: '2s'}}></div>
    </div>
  )
}