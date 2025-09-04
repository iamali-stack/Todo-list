# 📝 Todo List App
<img width="736" height="547" alt="Screenshot 2025-09-04 at 11 27 58 PM" src="https://github.com/user-attachments/assets/37144420-0594-45af-923b-421dd543a352" />
<img width="736" height="672" alt="Screenshot 2025-09-04 at 11 28 34 PM" src="https://github.com/user-attachments/assets/288da896-c22e-45c2-9ae0-2e97c0e777f2" />


A modern, responsive todo list application built with React and Vite. Stay organized and track your tasks with a clean, intuitive interface.

![React](https://img.shields.io/badge/React-19.1.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Add Tasks**: Create new tasks with a simple input field
- **Mark Complete**: Check off completed tasks with visual feedback
- **Edit Tasks**: Update existing tasks inline
- **Delete Tasks**: Remove tasks you no longer need
- **Persistent Storage**: Tasks are automatically saved to localStorage
- **Progress Tracking**: See how many tasks you've completed
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Clean, minimalist design with Tailwind CSS
- **Date Tracking**: Each task shows the creation date

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check for code issues

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.11
- **Icons**: Lucide React
- **Routing**: React Router DOM 7.8.2
- **Linting**: ESLint

## 📱 Usage

### Adding a Task
1. Type your task in the input field
2. Click the "Add" button or press Enter
3. Your task will appear in the list below

### Managing Tasks
- **Complete a task**: Click the checkbox next to any task
- **Edit a task**: Click the pen icon to modify the task text
- **Delete a task**: Click the trash icon to remove the task

### Features Overview
- Tasks are automatically saved to your browser's localStorage
- The app shows your progress at the bottom (e.g., "2 of 5 tasks completed")
- All tasks display their creation date
- The interface is fully responsive and works on all devices

## 🎨 Design Features

- **Clean Interface**: Minimalist design focused on productivity
- **Color Scheme**: Soft blue and gray tones for a calming experience
- **Responsive Layout**: Adapts seamlessly to different screen sizes
- **Visual Feedback**: Clear indicators for completed tasks and interactive elements
- **Accessibility**: Proper contrast ratios and keyboard navigation support

## 📁 Project Structure

```
my-app/
├── public/
│   └── vite.svg
├── src/
│   ├── Components/
│   │   ├── Home.jsx          # Main todo list component
│   │   └── Notfound.jsx      # 404 page component
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx               # Main app component with routing
│   ├── App.css
│   ├── index.css
│   └── main.jsx              # Entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Customization

### Styling
The app uses Tailwind CSS for styling. You can customize the appearance by modifying the classes in the components or by extending the Tailwind configuration.

### Adding New Features
- **Task Categories**: Add color coding or tags to tasks
- **Due Dates**: Implement date picker for task deadlines
- **Task Priorities**: Add priority levels (high, medium, low)
- **Search/Filter**: Add functionality to search through tasks
- **Drag & Drop**: Implement task reordering

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons

## 📞 Support

If you have any questions or run into issues, please feel free to open an issue on GitHub or reach out to the development team.

---

