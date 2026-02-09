import { motion } from 'framer-motion';
import { Card } from '@/components/Card';
import { TechIcon } from '@/components/TechIcon';
import { 
  MapPin, 
  Mail, 
  Github, 
  ArrowUpRight, 
  Layers, 
  Briefcase,
  FileText,
  Workflow,
 
} from 'lucide-react';

type TechItem = { name: string; slug?: string; icon?: React.ComponentType<{ className?: string }> }
const techStack: TechItem[] = [
  { name: 'React', slug: 'react' },
  { name: 'Vue 3', slug: 'vuedotjs' },
  { name: 'VS Code Extension', slug: 'visualstudiocode' },
  { name: 'Zustand', icon: Workflow },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'Nuxt.js', slug: 'nuxtdotjs' },
  { name: 'Tailwind CSS', slug: 'tailwindcss' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'Vite', slug: 'vite' },
  { name: 'Docker', slug: 'docker' },
];

const projects = [
  {
    title: "CodeWiz AI 研发助手",
    desc: "React • VS Code API • AI Agent • 提效 40%",
    color: "from-blue-600/20 to-cyan-600/20",
    link: "#",
    details: "小红书内部 AI 编程助手，基于开源 Roo-Code 二次开发。深度集成大模型能力，支持智能 Code Review、代码解释、单元测试生成等功能。设计了可配置智能体模块，显著降低研发认知负担。"
  },
  {
    title: "云效管理平台 (智能 Review)",
    desc: "React • Ant Design • qiankun • Claude",
    color: "from-indigo-600/20 to-violet-600/20",
    link: "#",
    details: "企业级一站式研发效能平台。负责智能 Code Review 模块，对接 Claude 大模型，将代码建议以高亮 Diff 形式可视化呈现。使用 qiankun 微前端架构实现模块解耦。"
  },
  {
    title: "小红书需求管理平台",
    desc: "Modern.js • Zustand • 动态表单",
    color: "from-rose-600/20 to-orange-600/20",
    link: "#",
    details: "支持产品研发协同的全生命周期管理平台。主导动态表单引擎开发，通过元数据配置实现零代码表单生成。使用 Zustand 管理复杂状态，通过虚拟滚动优化长列表性能。"
  },
  {
    title: "Hoyolab 海外社区",
    desc: "Nuxt.js • i18n (15+语言)",
    color: "from-purple-600/20 to-pink-600/20",
    link: "#",
    details: "米哈游全球玩家社区。基于 Nuxt SSR 架构，支持 15+ 种语言国际化。通过资源懒加载、关键 CSS 内联等策略，首屏加载时间降低 35%+，服务全球千万级玩家。"
  },
  {
    title: "HoyoWiki 内容管理后台",
    desc: "Vue 3 • Pinia • 可视化配置",
    color: "from-yellow-600/20 to-amber-600/20",
    link: "#",
    details: "服务《原神》《崩铁》等游戏的 Wiki 内容管理。构建了动态通用表单和多语言输入组件，实现了可视化页面配置系统，大幅提升运营内容发布效率。"
  },
  {
    title: "金融合规回溯系统",
    desc: "Vue • rrweb • 行为回放 • 100% 合规",
    color: "from-emerald-600/20 to-teal-600/20",
    link: "#",
    details: "基于 rrweb 实现全链路用户行为录制与回放，支持按保单号精准审计。设计了 RBAC 权限管理体系，确保数据安全，助力业务通过银保监会合规检查。"
  }
];

const workExperience = [
  {
    company: "小红书 / 云效平台",
    role: "前端开发工程师",
    period: "2024.04 - 至今",
    desc: "负责内部 AI 研发助手 CodeWiz 及需求管理平台开发。基于 VS Code 插件架构集成大模型能力，实现智能 Code Review 与代码生成。主导动态表单引擎开发，大幅提升业务配置自由度。"
  },
  {
    company: "米哈游 (MiHoYo)",
    role: "前端开发工程师",
    period: "2021.12 - 2024.03",
    desc: "负责 Hoyolab 海外社区及 Wiki 平台建设。基于 Nuxt.js 实现 15+ 语言国际化，通过性能优化使首屏加载时间降低 35%+。构建通用后台组件库，提升跨项目复用率。"
  },
  {
    company: "平安养老险",
    role: "前端开发工程师",
    period: "2020.12 - 2021.12",
    desc: "打造金融级用户行为回溯系统。基于 rrweb 实现全链路操作录制与回放，支持按保单号精准审计。参与 App 内嵌 H5 开发，构建高可用 Hybrid 前端架构。"
  },
  {
    company: "安徽盖乐网络科技",
    role: "前端开发工程师",
    period: "2018.12 - 2020.10",
    desc: "负责企业官网及内部管理后台开发。基于 Vue 实现数据可视化看板与复杂表单交互。"
  }
];

const coreCompetencies = [
  { title: "DevTools 与效能工具", desc: "深耕 VS Code 插件与研发效能平台，打造极致开发者体验。" },
  { title: "AI 工程化落地", desc: "实战 Claude/Roo-Code 大模型集成，实现 AI 辅助编程与智能 Code Review。" },
  { title: "大型全球化架构", desc: "参与用户社区的 i18n 国际化建设与 SSR 性能优化。" },
  { title: "金融级合规安全", desc: "构建高安全标准的行为回溯与 RBAC 权限管理体系。" }
];

export default function BentoPortfolio() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 p-4 md:p-8 text-zinc-100 selection:bg-indigo-500/30">
      <div className="fixed inset-0 z-0 bg-noise pointer-events-none mix-blend-overlay"></div>
      
      <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        
        {/* Hero Card - Spans 2x2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 md:row-span-2"
        >
          <Card className="flex flex-col justify-between bg-gradient-to-br from-zinc-900 to-zinc-950">
            <div className="flex items-start justify-between">
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
                <span className="text-xl">👨‍💻</span>
              </div>
              <div className="flex gap-3">
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  可接受新项目
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                王方乐 <br/>
                <span className="text-zinc-500">Front-end Developer</span>
              </h1>
              <p className="text-zinc-400 max-w-md">
                7年经验 • 专注 B 端效能工具与全球化产品建设。
                兼具 DevTools 开发、AI 工程化落地与金融合规系统实战经验。
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-1 md:row-span-1"
        >
          <Card className="flex flex-col items-center justify-center gap-4 bg-zinc-900/50">
            <div className="relative w-full h-full flex items-center justify-center">
              <MapPin className="h-8 w-8 text-indigo-400" />
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full"></div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-white">中国 · 上海</h3>
              <p className="text-xs text-zinc-500">UTC+8</p>
            </div>
          </Card>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-1 md:row-span-1"
        >
          <Card className="flex flex-col justify-center gap-4 bg-zinc-900/50">
            <a href="https://github.com/fangleW" target="_blank" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group">
              <Github className="h-5 w-5 text-zinc-400 group-hover:text-white" />
              <span className="text-sm font-medium text-zinc-400 group-hover:text-white">Github</span>
            </a>
            <a href="mailto:fanglewang@foxmail.com" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group">
              <Mail className="h-5 w-5 text-zinc-400 group-hover:text-emerald-400" />
              <span className="text-sm font-medium text-zinc-400 group-hover:text-emerald-400">邮件联系</span>
            </a>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group cursor-default">
              <div className="h-5 w-6 flex items-center justify-center text-zinc-400 group-hover:text-blue-400">
                <span className="text-xs font-bold">微信</span>
              </div>
              <span className="text-sm font-medium text-zinc-400 group-hover:text-blue-400">fangle0611</span>
            </div>
          </Card>
        </motion.div>

        {/* Tech Stack - Spans 2x1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2 md:row-span-1"
        >
          <Card className="bg-zinc-900/50" noPadding={true}>
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex flex-wrap gap-3 p-6 h-full overflow-y-auto content-start scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
              {techStack.map((tech) => (
                <div key={tech.name} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  {tech.slug ? (
                    <TechIcon slug={tech.slug} className="h-3.5 w-3.5 text-zinc-400" />
                  ) : tech.icon ? (
                    <tech.icon className="h-3.5 w-3.5 text-zinc-400" />
                  ) : null}
                  <span className="text-xs font-medium text-zinc-200">{tech.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Core Competencies (Replacing Articles) - Spans 2x1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2 md:row-span-1"
        >
          <Card className="flex flex-col justify-center gap-3 bg-zinc-900/50">
             <div className="flex items-center gap-2 mb-1">
              <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-white text-sm">核心竞争力</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {coreCompetencies.map((item, i) => (
                <div key={i} className="group">
                  <h4 className="text-sm font-medium text-zinc-200 group-hover:text-pink-400 transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-zinc-500 mt-0.5 line-clamp-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Work Experience - Spans 2x2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-2 md:row-span-2"
        >
          <Card className="bg-zinc-900/30" noPadding={true}>
            <div className="flex flex-col h-full">
              <div className="p-6 pb-2 shrink-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-indigo-400" />
                    工作经历
                  </h3>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 pt-2 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent min-h-0">
                {workExperience.map((job, i) => (
                  <div key={i} className="relative pl-6 pb-6 border-l border-zinc-800 last:border-0 last:pb-0">
                    <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-800 border border-zinc-700"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h4 className="font-medium text-zinc-200">{job.role}</h4>
                      <span className="text-xs text-zinc-500 font-mono bg-zinc-900 px-2 py-0.5 rounded">{job.period}</span>
                    </div>
                    <p className="text-sm text-indigo-400 mb-1">{job.company}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed">{job.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Projects - Spans 2x2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:col-span-2 md:row-span-2"
        >
          <Card className="bg-zinc-900/30" noPadding={true}>
            <div className="flex flex-col h-full">
              <div className="p-6 pb-2 shrink-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Layers className="h-5 w-5 text-indigo-400" />
                    精选项目
                  </h3>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 pt-2 space-y-3 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent min-h-0">
                {projects.map((project, i) => (
                  <a 
                    key={i}
                    href={project.link}
                    className="group block relative overflow-hidden rounded-xl bg-zinc-900 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-zinc-200 group-hover:text-white transition-colors">{project.title}</h4>
                          <p className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">{project.desc}</p>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-zinc-600 group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                      {project.details && (
                        <p className="text-[10px] text-zinc-400 leading-relaxed opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-300">
                          {project.details}
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* About / Bio - Spans 2x1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="md:col-span-2 md:row-span-1"
        >
          <Card className="flex flex-col justify-center bg-zinc-900/50">
             <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">关于我</h3>
             <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
               7年前端工程师，致力于通过 <span className="text-white font-medium">DevTools 效能工具</span> 与 <span className="text-white font-medium">AI 工程化</span> 提升研发效率。
               在小红书、米哈游等一线大厂积累了丰富的 B 端平台与全球化 C 端产品实战经验。
             </p>
          </Card>
        </motion.div>

      </div>
      
      <footer className="mt-16 text-center text-zinc-600 text-sm relative z-10">
        <p>© 2026 王方乐. 由 React, Tailwind & Motion 精心打造。</p>
      </footer>
    </div>
  );
}
