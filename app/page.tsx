import { GlitchText } from "@/components/glitch-text"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-8 px-4 text-center border-b border-gray-800">
        <h1 className="text-4xl md:text-6xl font-bold">
          <GlitchText text="React First Impression" />
        </h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* React Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Reactについて</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
            <p className="text-lg mb-6 text-gray-300 leading-relaxed">
              Reactは、Facebookによって開発されたJavaScriptライブラリで、ユーザーインターフェースの構築に特化しています。
              コンポーネントベースのアーキテクチャを採用し、再利用可能なUIパーツを作成できます。[^2][^3]
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* React メリット */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">メリット</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>コンポーネントベースで再利用性が高い</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>仮想DOMによる高いパフォーマンス</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>豊富なエコシステムと活発なコミュニティ</span>
                  </li>
                </ul>
              </div>

              {/* React デメリット */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-400">デメリット</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>学習コストが高い</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>頻繁なアップデートによる互換性の問題</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>SEOの実装が複雑になる場合がある</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SSG Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">SSG（Static Site Generation）について</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
            <p className="text-lg mb-6 text-gray-300 leading-relaxed">
              SSGは、ビルド時に静的なHTMLファイルを生成する手法です。
              サーバーサイドでの処理が不要で、CDNでの配信に最適化されており、
              高速なページ読み込みとSEOの向上を実現します。[^1]
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* SSG メリット */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">メリット</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>高速なページ読み込み</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>優れたSEOパフォーマンス</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>低コストでのホスティング</span>
                  </li>
                </ul>
              </div>

              {/* SSG デメリット */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-400">デメリット</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>動的コンテンツの実装が制限される</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>大規模サイトではビルド時間が長くなる</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>リアルタイムデータの表示が困難</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="container mx-auto flex justify-center items-center space-x-8">
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">▲</span>
            </div>
            <span className="text-gray-300">Vercel</span>
          </a>

          <a
            href="https://v0.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">v0</span>
            </div>
            <span className="text-gray-300">v0</span>
          </a>
        </div>
      </footer>
    </div>
  )
}
