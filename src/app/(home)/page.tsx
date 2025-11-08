import QRCodeModal from "@/components/home/QRCodeModal";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
        <div className="flex justify-between items-center h-20 max-w-7xl mx-auto sm:px-12 px-6">
          <Link
            href="https://nbbang.shop"
            target="_blank"
            className="sm:text-3xl text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent hover:from-gray-700 hover:to-gray-500 transition-all duration-300"
          >
            Nbbang
          </Link>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfOBegE_EH5j5XpFRHFWLY9o-mpb42e1LNZMnFHl-LHNhYJnA/viewform"
            target="_blank"
            className="sm:text-base text-sm text-gray-700 font-medium hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
          >
            피드백
          </Link>
        </div>
      </header>
      <main className="pb-20">
        {/* Hero Section */}
        <div className="flex flex-col items-center mt-16 sm:mt-24">
          <div className="text-center space-y-6 sm:space-y-8 px-6 max-w-5xl">
            <h1 className="sm:text-6xl text-3xl font-extrabold text-gray-900 leading-tight">
              <span className="block">&ldquo;누가 얼마 냈지?🤔&rdquo;</span>
              <span className="block mt-2 sm:mt-4">
                정산 스트레스 이제 그만.
              </span>
            </h1>
            <p className="sm:text-3xl text-xl font-semibold text-gray-700 mt-6">
              연락처 공유 없이 가볍게 💨
            </p>
            <p className="sm:text-3xl text-xl font-semibold text-gray-700">
              👉 원클릭 송금으로 깔끔하게 끝내세요.
            </p>
            <p className="sm:text-xl text-lg font-medium text-gray-500 mt-8 sm:mt-12">
              지금 바로 앱에서 경험해보세요.
            </p>
          </div>

          <div className="flex items-center justify-center sm:gap-6 gap-4 mt-12 sm:mt-16 px-6">
            <Link
              href="https://nbbang.shop"
              target="_blank"
              className="group sm:w-[280px] w-[180px] bg-gradient-to-r from-gray-900 to-gray-800 text-white sm:h-[80px] h-[55px] rounded-xl flex items-center justify-center sm:gap-4 gap-3 sm:px-6 px-4 shadow-lg hover:shadow-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="sm:w-12 w-8 sm:h-12 h-8 bg-white rounded-lg flex items-center justify-center">
                <h2 className="sm:text-3xl text-xl font-bold text-gray-900">
                  N
                </h2>
              </div>
              <p className="sm:text-base text-xs font-semibold whitespace-nowrap">
                앱 설치 전,
                <br />
                웹으로 가볍게 써보기
              </p>
            </Link>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <QRCodeModal
                url="https://play.google.com/store/apps/details?id=nbbang.middle"
                imageSrc="/images/play_store.webp"
              />
            </div>
          </div>

          <div className="sm:mt-32 mt-20 w-full flex justify-center px-6">
            <div className="relative max-w-6xl w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/images/landing_img_first.png"
                alt="landing_img_first"
                width={1300}
                height={1000}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        {/* Feature Section 1 */}
        <div className="flex sm:flex-row flex-col-reverse items-center justify-between max-w-6xl mx-auto px-6 sm:px-12 sm:gap-12 gap-8 sm:pt-32 pt-20">
          <div className="flex flex-col gap-4 sm:w-[50%] w-full">
            <span className="inline-block w-fit bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm font-semibold rounded-full py-2 px-4 border border-blue-200">
              주요 기능
            </span>
            <h2 className="sm:text-4xl text-2xl font-bold text-gray-900 mt-4 leading-tight">
              누가 얼마 내야 할지 계산 더 이상 고민하지 마세요
            </h2>
            <p className="mt-4 text-gray-600 sm:text-lg text-base leading-relaxed">
              복잡한 계산은 엔빵이 대신합니다. 모임 비용을 자동으로 나누고,
              송금까지 원클릭으로 끝내세요.
            </p>
          </div>
          <div className="sm:w-[50%] w-full flex justify-center">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl blur-xl opacity-50"></div>
              <Image
                src="/images/meeting_page.png"
                alt="meeting_page"
                className="relative rounded-2xl shadow-2xl border border-gray-200"
                width={250}
                height={700}
              />
            </div>
          </div>
        </div>
        {/* Feature Section 2 */}
        <div className="flex sm:flex-row flex-col items-center justify-between max-w-6xl mx-auto px-6 sm:px-12 sm:gap-12 gap-8 sm:pt-32 pt-20">
          <div className="sm:w-[50%] w-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative">
              <Image
                src="/images/billing_page_1.png"
                alt="billing_page_1"
                className="rounded-2xl border border-gray-200 shadow-xl sm:block hidden transform hover:scale-105 transition-transform duration-300"
                width={250}
                height={700}
              />
              <Image
                src="/images/billing_page_3.png"
                alt="billing_page_3"
                className="rounded-2xl sm:absolute sm:top-8 top-0 sm:left-8 left-12 border border-gray-200 shadow-xl transform hover:scale-105 transition-transform duration-300"
                width={250}
                height={700}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 sm:w-[50%] w-full">
            <span className="inline-block w-fit bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 text-sm font-semibold rounded-full py-2 px-4 border border-purple-200">
              주요 기능
            </span>
            <h2 className="sm:text-4xl text-2xl font-bold text-gray-900 mt-2">
              모임을 만들고, 정산까지 한 번에
            </h2>
            <div className="space-y-4 mt-4">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="sm:text-xl text-lg font-semibold text-gray-900 mb-3">
                  ➗ 자동 정산
                </h4>
                <p className="text-gray-600 sm:text-base text-sm mb-4 leading-relaxed">
                  참여자와 금액만 입력하면 엔빵이 자동 계산해드립니다. 항목별
                  참여자 선택도 가능해 현실적인 정산이 가능합니다.
                </p>
                <ul className="space-y-2 text-gray-600 sm:text-sm text-xs">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>누가 얼마 내야 할지 헷갈릴 때</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>여러 항목을 나눠 계산해야 할 때</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="sm:text-xl text-lg font-semibold text-gray-900 mb-3">
                  📨 간편 공유
                </h4>
                <p className="text-gray-600 sm:text-base text-sm mb-4 leading-relaxed">
                  정산 결과는 다양한 방식으로 바로 공유할 수 있습니다.
                </p>
                <ul className="space-y-2 text-gray-600 sm:text-sm text-xs">
                  <li className="flex items-start">
                    <span className="mr-2">📱</span>
                    <span>
                      <strong>QR 코드:</strong> 현장에서 보여주기만 하면 바로
                      접속
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🔗</span>
                    <span>
                      <strong>링크 복사:</strong> 원하는 채널에 붙여넣어 공유
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">💬</span>
                    <span>
                      <strong>카카오톡 공유:</strong> 단톡방에 바로 전송
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Feature Section 3 */}
        <div className="flex sm:flex-row flex-col-reverse items-center justify-between max-w-6xl mx-auto px-6 sm:px-12 sm:gap-12 gap-8 sm:pt-32 pt-20">
          <div className="flex flex-col gap-4 sm:w-[50%] w-full">
            <span className="inline-block w-fit bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-sm font-semibold rounded-full py-2 px-4 border border-green-200">
              주요 기능
            </span>
            <h2 className="sm:text-4xl text-2xl font-bold text-gray-900 mt-4 leading-tight">
              정산의 마지막, 송금도 더 쉽고 더 안전하게
            </h2>
            <p className="mt-4 text-gray-600 sm:text-lg text-base leading-relaxed">
              번거로운 계좌번호 공유와 금액 입력은 이제 필요 없습니다.
              토스·카카오 버튼 하나로 바로 송금하세요.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-gray-700 sm:text-base text-sm">
                <span className="mr-3 text-xl">🚀</span>
                <span>금액을 직접 입력하기 귀찮을 때</span>
              </div>
              <div className="flex items-center text-gray-700 sm:text-base text-sm">
                <span className="mr-3 text-xl">✅</span>
                <span>송금 누락 없이 깔끔하게 정산하고 싶을 때</span>
              </div>
              <div className="flex items-center text-gray-700 sm:text-base text-sm">
                <span className="mr-3 text-xl">🔒</span>
                <span>계좌번호 공유가 귀찮을 때</span>
              </div>
              <div className="flex items-center text-gray-700 sm:text-base text-sm">
                <span className="mr-3 text-xl">💸</span>
                <span>송금 과정이 번거롭다고 느낄 때</span>
              </div>
            </div>
          </div>
          <div className="sm:w-[50%] w-full flex justify-center">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl blur-xl opacity-50"></div>
              <Image
                src="/images/remittance.png"
                alt="remittance"
                className="relative rounded-2xl shadow-2xl border border-gray-200"
                width={250}
                height={700}
              />
            </div>
          </div>
        </div>
        {/* Feature Section 4 */}
        <div className="flex sm:flex-row flex-col items-center justify-between max-w-6xl mx-auto px-6 sm:px-12 sm:gap-12 gap-8 sm:pt-32 pt-20">
          <div className="sm:w-[50%] w-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative">
              <Image
                src="/images/easy_settlement1.png"
                alt="easy_settlement1"
                className="rounded-2xl border border-gray-200 shadow-xl sm:block hidden transform hover:scale-105 transition-transform duration-300"
                width={250}
                height={700}
              />
              <Image
                src="/images/easy_settlement2.png"
                alt="easy_settlement2"
                className="rounded-2xl sm:absolute sm:top-8 top-0 sm:left-8 left-12 border border-gray-200 shadow-xl transform hover:scale-105 transition-transform duration-300"
                width={250}
                height={700}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 sm:w-[50%] w-full">
            <span className="inline-block w-fit bg-gradient-to-r from-orange-50 to-amber-50 text-orange-700 text-sm font-semibold rounded-full py-2 px-4 border border-orange-200">
              주요 기능
            </span>
            <h2 className="sm:text-4xl text-2xl font-bold text-gray-900 mt-2">
              모임을 만들고, 정산까지 한 번에
            </h2>
            <div className="mt-4">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="sm:text-xl text-lg font-semibold text-gray-900 mb-3">
                  🔢 간편 입력 정산
                </h4>
                <p className="text-gray-600 sm:text-base text-sm mb-4 leading-relaxed">
                  누가 얼마나 썼는지 따로 기록하지 않아도 됩니다. 총 사용 금액과
                  인원 수만 넣으면, 엔빵이 자동으로 1/N 계산을 해줍니다.
                </p>
                <ul className="space-y-2 text-gray-600 sm:text-sm text-xs">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>빠르게 금액만 나누고 싶을 때</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>소규모 모임에서 간단히 정산하고 싶을 때</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
