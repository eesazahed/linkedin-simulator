const aiPrompt = `
/no_think

Generate a satiricial LinkedIn shitpost. The topic will be given, but you must write it in the style of a LinkedIn influencer, alright?
Buzzwords include AI, SF, agentic AI, meta AI, nvidia, b2b SaaS, b2b sales, monthly active users, SF startup culture, comment your email to gain access to ____, lets connect, vibecoding, the market, the economy, CEO, YC, hackathon, internship, dropout, resume, leetcode, CS student, unemployment, HR, co-founder, equity

Don't use all those buzzwords, but make sure to use a few when they are relavent. Remember, this is a shitpost, like "I just took out the trash - Here are 5 things it taught me about customer acquisition in a B2B SaaS."

LinkedIn Tech-Influencer Post Formula

Hook (1-2 sentences):

A bold statement, surprising setup, or personal event.

Examples:

“I'm getting flown out to SF in 4 days. But there's a catch.”

“Your startup idea is probably going to fail.”

Personal Context / Backstory (3-6 sentences):

Share how you got into the situation, conversation, or insight.

Keep sentences short, casual, almost like spoken word.

Example: “I don't have anything planned, and I have no idea how I'm going to pull this off.”

The Core Insight or Drama (4-8 sentences):

Either:

A challenge you're facing (“500 users in a week or I pay out of pocket”)

A person you met + credibility markers (bullets, stats, achievements)

A mindset shift / framework (e.g. “expected value thinking”)

Mix raw honesty with sharp specifics.

Expansion or Proof (3-5 sentences):

Tie it to a broader lesson, pattern, or opportunity.

Example: “Most startups fail, not because the founders made bad choices, but because the odds were low.”

Or: “These are not builders, these are anomalies valued at $100M.”

Call to Action (2-3 sentences):

Invite engagement (DMs, connections, wild ideas).

Or promote your project/event subtly.

Example: “If you're in SF, let's connect. If you've got wild ideas, I'd love to hear them.”

Use plaintext, no emojis, no em-dashes. Be creative and try to sound insufferable too (this is a satirical shitpost after all). Be short, snappy, and seperate your clauses with newlines. Use punctuation (no em dashes tho), but everything should be lowercase. Sound pretentious, and shitposty. act like your better then everyone else because your AI b2b SaaS generates $100m in ARR. Dont use slang or meme culture. Remember, youre a professional fella. CEO trillionare grindset hustler lifestyle and stuff.
Now, here is the topic you must work with to create your own LinkedIn post:

`;

const postIdeaTextArea = document.querySelector("#post-idea");
const generateBtn = document.querySelector("#generate-btn");
const generatedResponse = document.querySelector("#generated-response");

const generatePost = async () => {
  generatedResponse.innerText = "Generating post...";

  const res = await fetch("https://ai.hackclub.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: [
        {
          role: "user",
          content: `${aiPrompt} \n ${postIdeaTextArea.value}`,
        },
      ],
    }),
  });

  const data = await res.json();
  const aiResponse = data.choices[0].message.content
    .replace(/<think>[\s\S]*?<\/think>/, "")
    .trim();

  generatedResponse.innerText = aiResponse;
};

generateBtn.addEventListener("click", async () => await generatePost());
