import { email, github, linkedIn } from "../Links";

export function Footer() {
  return (
    <footer className="py-4 border-t border-glass-border bg-surface-container-lowest dark:bg-surface-container-lowest">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop gap-gutter max-w-container-max">
        <p className="font-code-sm text-code-sm text-on-surface-variant">
          © 2026 made by Mohammad Kady.
        </p>
        <div className="flex gap-6 font-code-sm text-code-sm">
          <a
            className="text-on-surface-variant hover:text-tertiary-fixed transition-colors"
            href={github}
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="text-on-surface-variant hover:text-tertiary-fixed transition-colors"
            href={linkedIn}
            target="_blank"
          >
            LinkedIn
          </a>

          <a
            className="text-on-surface-variant hover:text-tertiary-fixed transition-colors"
            href={email}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
