export const siteConfig = {
  title: "KowaMC",
  logo: "/logo.webp",
  favicon: "/logo.webp",
  languages: {
    available: [
      "br",
      "en",
      "es",
    ],
    default: "br",
  },
  console: {
    name: "KowaMC", // Just for filter badge
    uuid: "KowaMC", // Use for filter url and to check if a punishment is made from the Console. In some versions of Litebans, the console uuid is "CONSOLE".
    icon: "/console.webp",
    body: "/console-body.webp",
    bust: "/console-bust.webp",
  },
  defaultPlayerLookup: "MubiLop",
  // When enabled, body and bust images will show a steve skin
  bedrock: {
    enabled: true,
    prefix: ".",
  },
  openGraph: {
    dateFormat: "dd-MM-yyyy hh:mm:ss",
    pages: {
      main: {
        // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
        description: `
        Lista de punições da KowaMC

        Punições totais: {total}

          🚫 Bans: {bans}
          🔇 Mutes: {mutes}
          ⚠️ Warns: {warns}
          ❌ Kicks: {kicks}
        `
      },
      history: {
        // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
        description: `
        Punições totais: {total}

          🚫 Bans: {bans}
          🔇 Mutes: {mutes}
          ⚠️ Warns: {warns}
          ❌ Kicks: {kicks}
        `
      },
      player: {
        // Placeholders: {name}, {total}, {bans}, {mutes}, {kicks}, {warns}
        description: `
        Punições de {name}.

        Punições totais: {total}

          🚫 Bans: {bans}
          🔇 Mutes: {mutes}
          ⚠️ Warns: {warns}
          ❌ Kicks: {kicks}
        `,
        bans: {
          description: `
          Banimentos de {name}.

          Banimentos totais: {total}
          `,
        },
        mutes: {
          description: `
          Mutes de {name}.

          Mutes totais: {total}
          `,
        },
        warns: {
          description: `
          Warns de {name}.

          Warns totais: {total}
          `,
        },
        kicks: {
          description: `
          Kicks de {name}.

          Kicks totais: {total}
          `,
        },
      },
      bans: {
        // Placeholders: {total}
        description: "Bans totais: {total}"
      },
      mutes: {
        // Placeholders: {total}
        description: "Mutes totais: {total}"
      },
      warns: {
        // Placeholders: {total}
        description: "Warns totais: {total}"
      },
      kicks: {
        // Placeholders: {total}
        description: "Kicks totais: {total}"
      },
    },
    punishments: {
      ban: {
        // Placeholders: {name}, {staff}, {reason}, {time}, {duration}, {server}
        description: `
        👤 Usuário: {name}
        👮 Staff: {staff}

        📜 Razão: {reason}
        🕒 Data: {time}
        ⌛ Duração: {duration}
        `
      },
      mute: {
        // Placeholders: {name}, {staff}, {reason}, {time}, {duration}, {server}
        description: `
        👤 Usuário: {name}
        👮 Staff: {staff}

        📜 Razão: {reason}
        🕒 Data: {time}
        ⌛ Duração: {duration}
        `
      },
      warn: {
        // Placeholders: {name}, {staff}, {reason}, {time}, {server}
        description: `
        👤 Usuário: {name}
        👮 Staff: {staff}

        📜 Razão: {reason}
        🕒 Data: {time}
        `
      },
      kick: {
        // Placeholders: {name}, {staff}, {reason}, {time}, {server}
        description: `
        👤 Usuário: {name}
        👮 Staff: {staff}

        📜 Razão: {reason}
        🕒 Data: {time}
        `
      }
    }
  }
}
export type SiteConfig = typeof siteConfig;
