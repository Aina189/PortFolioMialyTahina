export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Alex Johnson</h3>
          <p className="text-gray-400 mb-6">
            Full Stack Developer passionate about creating amazing web experiences
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Alex Johnson. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}