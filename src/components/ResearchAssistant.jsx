import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSend, FiHelpCircle } from 'react-icons/fi';
import { glowingCard } from '../theme/GlowingTheme';
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter
} from './ui/expandable-chat';
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from './ui/chat-bubble';
import { ChatInput } from './ui/chat-input';
import { ChatMessageList } from './ui/chat-message-list';

const ResearchAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hello! I'm your research assistant. How can I help you with your research tasks today?",
      sender: "assistant"
    }
  ]);
  
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      id: Date.now(),
      content: input.trim(),
      sender: "user"
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const assistantResponses = {
        "help": "I can help you organize your tasks, set priorities, and manage your research workflow. Try asking about task organization, time management, or research methods.",
        "task": "To create an effective research task, make sure to include a clear title, detailed description, realistic deadline, and appropriate priority level.",
        "priority": "I recommend prioritizing tasks based on deadlines, importance to your research goals, and dependencies with other tasks.",
        "time management": "Effective time management for research involves breaking large tasks into smaller ones, setting specific time blocks, and tracking your progress regularly.",
        "literature review": "For literature reviews, I suggest creating separate tasks for searching, reading, summarizing, and synthesizing. This makes the process more manageable."
      };
      
      // Find a relevant response based on keywords
      let responseContent = "I'm not sure how to help with that specific question. Could you ask about task organization, priorities, or research methods?";
      
      const lowerInput = userMessage.content.toLowerCase();
      for (const [keyword, response] of Object.entries(assistantResponses)) {
        if (lowerInput.includes(keyword)) {
          responseContent = response;
          break;
        }
      }
      
      const assistantMessage = {
        id: Date.now() + 1,
        content: responseContent,
        sender: "assistant"
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <StyledExpandableChat
      icon={<FiHelpCircle size={24} />}
      size="lg"
      position="bottom-right"
    >
      <StyledChatHeader className="text-center">
        <h3 className="title">Research Assistant</h3>
        <p className="subtitle">I can help with your research tasks</p>
      </StyledChatHeader>
      
      <StyledChatBody>
        <ChatMessageList>
          {messages.map((message) => (
            <StyledChatBubble key={message.id} className={message.sender === "user" ? "justify-end" : ""}>
              {message.sender === "assistant" && (
                <StyledChatAvatar>
                  <div>
                    <FiHelpCircle size={20} />
                  </div>
                </StyledChatAvatar>
              )}
              
              <StyledChatMessage 
                variant={message.sender === "user" ? "primary" : "default"}
              >
                {message.content}
              </StyledChatMessage>
            </StyledChatBubble>
          ))}
          
          {isLoading && (
            <StyledChatBubble>
              <StyledChatAvatar>
                <div>
                  <FiHelpCircle size={20} />
                </div>
              </StyledChatAvatar>
              
              <StyledChatMessage isLoading={true} />
            </StyledChatBubble>
          )}
        </ChatMessageList>
      </StyledChatBody>
      
      <StyledChatFooter>
        <StyledChatInput
          value={input}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          placeholder="Ask about research tasks..."
          disabled={isLoading}
          submitButton={
            <SendButton 
              type="submit"
              disabled={isLoading || !input.trim()}
            >
              <FiSend size={18} />
            </SendButton>
          }
        />
      </StyledChatFooter>
    </StyledExpandableChat>
  );
};

const StyledExpandableChat = styled(ExpandableChat)`
  .once-panel {
    ${glowingCard}
    background: ${props => props.theme.colors.cardBackground};
  }
`;

const StyledChatHeader = styled(ExpandableChatHeader)`
  padding: 1.25rem 1rem;
  
  .title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color);
  }
  
  .subtitle {
    font-size: 0.875rem;
    opacity: 0.7;
  }
`;

const StyledChatBody = styled(ExpandableChatBody)`
  background: rgba(0, 0, 0, 0.2);
`;

const StyledChatFooter = styled(ExpandableChatFooter)`
  border-top-color: rgba(255, 255, 255, 0.1);
  padding: 0.75rem;
`;

const StyledChatBubble = styled(ChatBubble)`
  margin-bottom: 1rem;
`;

const StyledChatAvatar = styled(ChatBubbleAvatar)`
  background: transparent;
  
  > div {
    background: var(--gradient);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 50%;
  }
`;

const StyledChatMessage = styled(ChatBubbleMessage)`
  background: ${props => props.variant === 'primary' ? 'var(--gradient)' : 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.variant === 'primary' ? 'white' : 'inherit'};
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  max-width: 75%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const StyledChatInput = styled(ChatInput)`
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:focus-within {
    border-color: var(--color);
    box-shadow: 0 0 0 2px rgba(50, 166, 255, 0.25);
  }
  
  input {
    background: transparent;
    color: white;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--gradient);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(50, 166, 255, 0.5);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export default ResearchAssistant; 