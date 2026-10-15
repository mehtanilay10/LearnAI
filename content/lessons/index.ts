import type { Lesson } from '@/types';

// .NET + React AI Lead course lessons
// Phase 1: Advanced .NET & System Design
import dotnetAsyncDeepDive from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/advanced-csharp-patterns/dotnet-async-deep-dive.json';
import dotnetMemoryManagement from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/advanced-csharp-patterns/dotnet-memory-management.json';
import dotnetDiPatterns from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/advanced-csharp-patterns/dotnet-di-patterns.json';
import dotnetModernCsharpFeatures from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/advanced-csharp-patterns/dotnet-modern-csharp-features.json';
import dotnetDistributedSystemsFundamentals from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/system-design-architecture/dotnet-distributed-systems-fundamentals.json';
import dotnetMicroservicesPatterns from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/system-design-architecture/dotnet-microservices-patterns.json';
import dotnetApiDesignBestPractices from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/system-design-architecture/dotnet-api-design-best-practices.json';
import dotnetEventDrivenArchitecture from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/system-design-architecture/dotnet-event-driven-architecture.json';
import dotnetProfilingBenchmarking from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/performance-scaling/dotnet-profiling-benchmarking.json';
import dotnetCachingStrategies from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/performance-scaling/dotnet-caching-strategies.json';
import dotnetMessageQueues from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/performance-scaling/dotnet-message-queues.json';
import dotnetHorizontalVerticalScaling from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/performance-scaling/dotnet-horizontal-vertical-scaling.json';
import dotnetResilientAiClients from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/performance-scaling/dotnet-resilient-ai-clients.json';
import dotnetStreamingApisBackground from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/performance-scaling/dotnet-streaming-apis-background.json';
import dotnetDurableWorkflows from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/performance-scaling/dotnet-durable-workflows.json';

// Phase 2: React/TypeScript & Modern Frontend
import dotnetReactInternals from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/advanced-react-patterns/dotnet-react-internals.json';
import dotnetCustomHooksPatterns from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/advanced-react-patterns/dotnet-custom-hooks-patterns.json';
import dotnetReactPerformanceOptimization from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/advanced-react-patterns/dotnet-react-performance-optimization.json';
import dotnetAdvancedComponentPatterns from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/advanced-react-patterns/dotnet-advanced-component-patterns.json';
import dotnetTypescriptGenerics from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/typescript-advanced/dotnet-typescript-generics.json';
import dotnetTypescriptUtilityTypes from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/typescript-advanced/dotnet-typescript-utility-types.json';
import dotnetTypescriptConditionalTypes from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/typescript-advanced/dotnet-typescript-conditional-types.json';
import dotnetTypescriptTypeSafetyPatterns from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/typescript-advanced/dotnet-typescript-type-safety-patterns.json';
import dotnetContextAndRedux from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/state-management-architecture/dotnet-context-and-redux.json';
import dotnetReactQueryServerState from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/state-management-architecture/dotnet-react-query-server-state.json';
import dotnetFormStateManagement from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/state-management-architecture/dotnet-form-state-management.json';
import dotnetStateArchitecturePatterns from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/state-management-architecture/dotnet-state-architecture-patterns.json';
import dotnetStreamingAiUx from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/state-management-architecture/dotnet-streaming-ai-ux.json';
import dotnetToolCallStatus from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/state-management-architecture/dotnet-tool-call-status.json';
import dotnetConversationState from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/state-management-architecture/dotnet-conversation-state.json';

// Phase 3: Generative AI & LLM Integration
import dotnetTransformerArchitecture from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/llm-fundamentals/dotnet-transformer-architecture.json';
import dotnetTokenizationEmbeddings from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/llm-fundamentals/dotnet-tokenization-embeddings.json';
import dotnetContextWindowParameters from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/llm-fundamentals/dotnet-context-window-parameters.json';
import dotnetModelSelectionEvaluation from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/llm-fundamentals/dotnet-model-selection-evaluation.json';
import dotnetSystemPrompts from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/prompt-engineering/dotnet-system-prompts.json';
import dotnetFewShotPrompting from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/prompt-engineering/dotnet-few-shot-prompting.json';
import dotnetChainOfThought from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/prompt-engineering/dotnet-chain-of-thought.json';
import dotnetStructuredOutputPrompts from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/prompt-engineering/dotnet-structured-output-prompts.json';
import dotnetOpenaiSdkBasics from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/llm-integration-dotnet/dotnet-openai-sdk-basics.json';
import dotnetAzureOpenaiIntegration from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/llm-integration-dotnet/dotnet-azure-openai-integration.json';
import dotnetLocalModelsOllama from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/llm-integration-dotnet/dotnet-local-models-ollama.json';
import dotnetStreamingErrorHandling from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/llm-integration-dotnet/dotnet-streaming-error-handling.json';
import dotnetSemanticKernelBasics from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/ai-sdk-semantic-kernel/dotnet-semantic-kernel-basics.json';
import dotnetSkillsPlugins from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/ai-sdk-semantic-kernel/dotnet-skills-plugins.json';
import dotnetPlannersConnectors from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/ai-sdk-semantic-kernel/dotnet-planners-connectors.json';
import dotnetSkMemoryEmbeddings from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/ai-sdk-semantic-kernel/dotnet-sk-memory-embeddings.json';
import dotnetModelRouting from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/llm-integration-dotnet/dotnet-model-routing.json';
import dotnetMultimodalAi from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/llm-integration-dotnet/dotnet-multimodal-ai.json';
import dotnetMicrosoftExtensionsAi from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/ai-sdk-semantic-kernel/dotnet-microsoft-extensions-ai.json';
import dotnetDirectApisVsAbstractions from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/ai-sdk-semantic-kernel/dotnet-direct-apis-vs-abstractions.json';

// Phase 4: RAG, Agents & MCP
import dotnetRagArchitecture from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/rag-fundamentals/dotnet-rag-architecture.json';
import dotnetVectorDatabases from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/rag-fundamentals/dotnet-vector-databases.json';
import dotnetChunkingStrategies from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/rag-fundamentals/dotnet-chunking-strategies.json';
import dotnetHybridSearch from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/rag-fundamentals/dotnet-hybrid-search.json';
import dotnetAdvancedRetrieval from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/rag-fundamentals/dotnet-advanced-retrieval.json';
import dotnetMicrosoftExtensionsVectordata from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/rag-fundamentals/dotnet-microsoft-extensions-vectordata.json';
import dotnetAgentFundamentals from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/ai-agents/dotnet-agent-fundamentals.json';
import dotnetToolCalling from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/ai-agents/dotnet-tool-calling.json';
import dotnetAgentPlanning from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/ai-agents/dotnet-agent-planning.json';
import dotnetMultiAgentSystems from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/ai-agents/dotnet-multi-agent-systems.json';
import dotnetAgentOrchestration from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/ai-agents/dotnet-agent-orchestration.json';
import dotnetMcpFundamentals from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/mcp-integration/dotnet-mcp-fundamentals.json';
import dotnetBuildingMcpServers from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/mcp-integration/dotnet-building-mcp-servers.json';
import dotnetMcpClientIntegration from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/mcp-integration/dotnet-mcp-client-integration.json';
import dotnetMcpToolsResources from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/mcp-integration/dotnet-mcp-tools-resources.json';
import dotnetMcpAuthorizationSecurity from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/mcp-integration/dotnet-mcp-authorization-security.json';

// Phase 5: Azure Cloud & DevOps
import dotnetAzureAppService from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/azure-fundamentals/dotnet-azure-app-service.json';
import dotnetAzureFunctions from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/azure-fundamentals/dotnet-azure-functions.json';
import dotnetCosmosDb from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/azure-fundamentals/dotnet-cosmos-db.json';
import dotnetAzureSql from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/azure-fundamentals/dotnet-azure-sql.json';
import dotnetDockerContainerization from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/devops-cicd/dotnet-docker-containerization.json';
import dotnetKubernetesAks from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/devops-cicd/dotnet-kubernetes-aks.json';
import dotnetGithubActions from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/devops-cicd/dotnet-github-actions.json';
import dotnetInfrastructureAsCode from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/devops-cicd/dotnet-infrastructure-as-code.json';
import dotnetApplicationInsights from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/monitoring-observability/dotnet-application-insights.json';
import dotnetStructuredLogging from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/monitoring-observability/dotnet-structured-logging.json';
import dotnetMetricsDashboards from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/monitoring-observability/dotnet-metrics-dashboards.json';
import dotnetDistributedTracing from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/monitoring-observability/dotnet-distributed-tracing.json';
import dotnetAzureAiServices from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/azure-fundamentals/dotnet-azure-ai-services.json';
import dotnetCostMonitoring from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/monitoring-observability/dotnet-cost-monitoring.json';

// Phase 6: Security, Testing & AI-Assisted Dev
import dotnetAuthenticationAuthorization from '../courses/dotnet-react-ai-lead/phase-6-security-testing/security-fundamentals/dotnet-authentication-authorization.json';
import dotnetOwaspTop10 from '../courses/dotnet-react-ai-lead/phase-6-security-testing/security-fundamentals/dotnet-owasp-top-10.json';
import dotnetSecureCoding from '../courses/dotnet-react-ai-lead/phase-6-security-testing/security-fundamentals/dotnet-secure-coding.json';
import dotnetSecretsManagement from '../courses/dotnet-react-ai-lead/phase-6-security-testing/security-fundamentals/dotnet-secrets-management.json';
import dotnetAiSecurityGovernance from '../courses/dotnet-react-ai-lead/phase-6-security-testing/security-fundamentals/dotnet-ai-security-governance.json';
import dotnetUnitTesting from '../courses/dotnet-react-ai-lead/phase-6-security-testing/testing-strategies/dotnet-unit-testing.json';
import dotnetIntegrationTesting from '../courses/dotnet-react-ai-lead/phase-6-security-testing/testing-strategies/dotnet-integration-testing.json';
import dotnetE2eTesting from '../courses/dotnet-react-ai-lead/phase-6-security-testing/testing-strategies/dotnet-e2e-testing.json';
import dotnetTddBestPractices from '../courses/dotnet-react-ai-lead/phase-6-security-testing/testing-strategies/dotnet-tdd-best-practices.json';
import dotnetAiEvaluation from '../courses/dotnet-react-ai-lead/phase-6-security-testing/testing-strategies/dotnet-ai-evaluation.json';
import dotnetGithubCopilot from '../courses/dotnet-react-ai-lead/phase-6-security-testing/ai-assisted-development/dotnet-github-copilot.json';
import dotnetAiCodeReview from '../courses/dotnet-react-ai-lead/phase-6-security-testing/ai-assisted-development/dotnet-ai-code-review.json';
import dotnetAiRefactoring from '../courses/dotnet-react-ai-lead/phase-6-security-testing/ai-assisted-development/dotnet-ai-refactoring.json';
import dotnetAiDebugging from '../courses/dotnet-react-ai-lead/phase-6-security-testing/ai-assisted-development/dotnet-ai-debugging.json';

// Phase 7: Capstone Project
import dotnetCapstoneArchitecture from '../courses/dotnet-react-ai-lead/phase-7-capstone/capstone-design/dotnet-capstone-architecture.json';
import dotnetCapstoneDataModel from '../courses/dotnet-react-ai-lead/phase-7-capstone/capstone-design/dotnet-capstone-data-model.json';
import dotnetCapstoneRagDesign from '../courses/dotnet-react-ai-lead/phase-7-capstone/capstone-design/dotnet-capstone-rag-design.json';
import dotnetCapstoneSecurityDesign from '../courses/dotnet-react-ai-lead/phase-7-capstone/capstone-design/dotnet-capstone-security-design.json';
import dotnetCapstoneBackend from '../courses/dotnet-react-ai-lead/phase-7-capstone/capstone-implementation/dotnet-capstone-backend.json';
import dotnetCapstoneFrontend from '../courses/dotnet-react-ai-lead/phase-7-capstone/capstone-implementation/dotnet-capstone-frontend.json';
import dotnetCapstoneRagImplementation from '../courses/dotnet-react-ai-lead/phase-7-capstone/capstone-implementation/dotnet-capstone-rag-implementation.json';
import dotnetCapstoneDeployment from '../courses/dotnet-react-ai-lead/phase-7-capstone/capstone-implementation/dotnet-capstone-deployment.json';
import dotnetEvaluationProduction from '../courses/dotnet-react-ai-lead/phase-7-capstone/capstone-implementation/dotnet-evaluation-production.json';

// Phase 1: New module - Clean Architecture & .NET Aspire
import dotnetDomainDrivenDesign from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/clean-architecture-dotnet-aspire/dotnet-domain-driven-design.json';
import dotnetCleanArchitectureNet from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/clean-architecture-dotnet-aspire/dotnet-clean-architecture-net.json';
import dotnetCqrsEventSourcing from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/clean-architecture-dotnet-aspire/dotnet-cqrs-event-sourcing.json';
import dotnetAspireOrchestration from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/clean-architecture-dotnet-aspire/dotnet-aspire-orchestration.json';

// Phase 1: New lessons under performance-scaling
import dotnetNativeAotAi from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/performance-scaling/dotnet-native-aot-ai.json';
import dotnetDistributedCacheAi from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/performance-scaling/dotnet-distributed-cache-ai.json';

// Phase 2: New lessons under advanced-react-patterns
import dotnetReactServerActionsAi from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/advanced-react-patterns/dotnet-react-server-actions-ai.json';
import dotnetReactServerComponentsAi from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/advanced-react-patterns/dotnet-react-server-components-ai.json';

// Phase 3: New module - Embedding Systems & Vector Engineering
import dotnetEmbeddingModelOptimization from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/embedding-systems-vector-engineering/dotnet-embedding-model-optimization.json';
import dotnetVectorIndexOptimization from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/embedding-systems-vector-engineering/dotnet-vector-index-optimization.json';
import dotnetCrossEncoderReranking from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/embedding-systems-vector-engineering/dotnet-cross-encoder-reranking.json';
import dotnetEmbeddingCacheStrategies from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/embedding-systems-vector-engineering/dotnet-embedding-cache-strategies.json';

// Phase 4: New module - Agent Memory & Human-in-the-Loop
import dotnetAgentMemoryArchitectures from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/agent-memory-hitl/dotnet-agent-memory-architectures.json';
import dotnetAgentEvaluationMonitoring from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/agent-memory-hitl/dotnet-agent-evaluation-monitoring.json';
import dotnetHumanInTheLoopAgents from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/agent-memory-hitl/dotnet-human-in-the-loop-agents.json';
import dotnetAgentDebuggingTracing from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/agent-memory-hitl/dotnet-agent-debugging-tracing.json';

// Phase 4: New lessons under rag-fundamentals
import dotnetRetrievalOptimization from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/rag-fundamentals/dotnet-retrieval-optimization.json';
import dotnetRagEvaluation from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/rag-fundamentals/dotnet-rag-evaluation.json';
import dotnetRagProductionPatterns from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/rag-fundamentals/dotnet-rag-production-patterns.json';

// Phase 4: New lessons under mcp-integration
import dotnetMcpSessionsLifecycle from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/mcp-integration/dotnet-mcp-sessions-lifecycle.json';
import dotnetMcpPromptTemplates from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/mcp-integration/dotnet-mcp-prompt-templates.json';
import dotnetMcpProductionDeployment from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/mcp-integration/dotnet-mcp-production-deployment.json';

// Phase 5: New lessons under monitoring-observability
import dotnetAiObservabilityInsights from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/monitoring-observability/dotnet-ai-observability-insights.json';
import dotnetLlmOpentelemetryTracing from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/monitoring-observability/dotnet-llm-opentelemetry-tracing.json';

// Phase 6: New lesson under ai-assisted-dev
import dotnetAiPairProgramming from '../courses/dotnet-react-ai-lead/phase-6-security-testing/ai-assisted-development/dotnet-ai-pair-programming.json';

// AI Basics — phase-1-foundations — what-is-ai
import aiVsMlVsGenerativeAi from '../courses/ai-basics/phase-1-foundations/what-is-ai/ai-vs-ml-vs-generative-ai.json';
import howLlmsWorkSimply from '../courses/ai-basics/phase-1-foundations/what-is-ai/how-llms-work-simply.json';
import whatAiCanAndCannotDo from '../courses/ai-basics/phase-1-foundations/what-is-ai/what-ai-can-and-cannot-do.json';
import aiInEverydayLife from '../courses/ai-basics/phase-1-foundations/what-is-ai/ai-in-everyday-life.json';

// AI Basics — phase-1-foundations — ai-tools-overview
import chatbotLandscape from '../courses/ai-basics/phase-1-foundations/ai-tools-overview/chatbot-landscape.json';
import choosingTheRightTool from '../courses/ai-basics/phase-1-foundations/ai-tools-overview/choosing-the-right-tool.json';

// AI Basics — phase-1-foundations — prompting-basics
import anatomyOfAGoodPrompt from '../courses/ai-basics/phase-1-foundations/prompting-basics/anatomy-of-a-good-prompt.json';
import promptPatterns from '../courses/ai-basics/phase-1-foundations/prompting-basics/prompt-patterns.json';
import commonPromptingMistakes from '../courses/ai-basics/phase-1-foundations/prompting-basics/common-prompting-mistakes.json';
import systemPromptsAndCustomInstructions from '../courses/ai-basics/phase-1-foundations/prompting-basics/system-prompts-and-custom-instructions.json';

// AI Basics — phase-2-key-concepts — understanding-llms
import tokensExplained from '../courses/ai-basics/phase-2-key-concepts/understanding-llms/tokens-explained.json';
import contextWindowDeepDive from '../courses/ai-basics/phase-2-key-concepts/understanding-llms/context-window-deep-dive.json';

// AI Basics — phase-2-key-concepts — hallucinations-and-accuracy
import aiHallucinationDeepDive from '../courses/ai-basics/phase-2-key-concepts/hallucinations-and-accuracy/ai-hallucination-deep-dive.json';
import evaluatingAiOutput from '../courses/ai-basics/phase-2-key-concepts/hallucinations-and-accuracy/evaluating-ai-output.json';

// AI Basics — phase-3-tools-in-depth — chatbots-in-depth
import chatgptGuide from '../courses/ai-basics/phase-3-tools-in-depth/chatbots-in-depth/chatgpt-guide.json';
import modelComparison from '../courses/ai-basics/phase-3-tools-in-depth/chatbots-in-depth/model-comparison.json';
import aiForCoding from '../courses/ai-basics/phase-3-tools-in-depth/chatbots-in-depth/ai-for-coding.json';
import modelSelectionAndCostOptimization from '../courses/ai-basics/phase-3-tools-in-depth/chatbots-in-depth/model-selection-and-cost-optimization.json';

// AI Basics — phase-3-tools-in-depth — research-and-search-tools
import aiForResearch from '../courses/ai-basics/phase-3-tools-in-depth/research-and-search-tools/ai-for-research.json';

// AI Basics — phase-3-tools-in-depth — writing-and-content-tools
import aiWritingAssistant from '../courses/ai-basics/phase-3-tools-in-depth/writing-and-content-tools/ai-writing-assistant.json';
import editingWithAi from '../courses/ai-basics/phase-3-tools-in-depth/writing-and-content-tools/editing-with-ai.json';

// AI Basics — phase-4-advanced-prompting — advanced-prompting
import chainOfThoughtPrompting from '../courses/ai-basics/phase-4-advanced-prompting/advanced-prompting/chain-of-thought-prompting.json';
import fewShotPrompting from '../courses/ai-basics/phase-4-advanced-prompting/advanced-prompting/few-shot-prompting.json';

// AI Basics — phase-4-advanced-prompting — ai-workflows
import buildingYourFirstWorkflow from '../courses/ai-basics/phase-4-advanced-prompting/ai-workflows/building-your-first-workflow.json';
import promptDebuggingWorkflow from '../courses/ai-basics/phase-4-advanced-prompting/ai-workflows/prompt-debugging-workflow.json';
import aiProductDesignLifecycle from '../courses/ai-basics/phase-4-advanced-prompting/ai-workflows/ai-product-design-lifecycle.json';

// AI Basics — phase-5-automation-agents — automation-basics
import whatIsAiAutomation from '../courses/ai-basics/phase-5-automation-agents/automation-basics/what-is-ai-automation.json';
import noCodeAutomationTools from '../courses/ai-basics/phase-5-automation-agents/automation-basics/no-code-automation-tools.json';
import aiForDataAnalysis from '../courses/ai-basics/phase-5-automation-agents/automation-basics/ai-for-data-analysis.json';

// AI Basics — phase-5-automation-agents — agents-introduction
import whatAreAgents from '../courses/ai-basics/phase-5-automation-agents/agents-introduction/what-are-agents.json';
import howAgentsWork from '../courses/ai-basics/phase-5-automation-agents/agents-introduction/how-agents-work.json';

// AI Basics — phase-5-automation-agents — tool-calling-basics
import whatIsToolCalling from '../courses/ai-basics/phase-5-automation-agents/tool-calling-basics/what-is-tool-calling.json';
import agentGuardrailsAndApprovals from '../courses/ai-basics/phase-5-automation-agents/tool-calling-basics/agent-guardrails-and-approvals.json';

// AI Basics — phase-6-safety — safety-and-limitations
import aiLimitations from '../courses/ai-basics/phase-6-safety/safety-and-limitations/ai-limitations.json';
import criticalEvaluation from '../courses/ai-basics/phase-6-safety/safety-and-limitations/critical-evaluation.json';
import aiEvaluationMetrics from '../courses/ai-basics/phase-6-safety/safety-and-limitations/ai-evaluation-metrics.json';
import promptSecurityAndJailbreakDefense from '../courses/ai-basics/phase-6-safety/safety-and-limitations/prompt-security-and-jailbreak-defense.json';

// AI Basics — phase-6-safety — privacy-and-data
import protectingYourData from '../courses/ai-basics/phase-6-safety/privacy-and-data/protecting-your-data.json';
import aiAndCopyright from '../courses/ai-basics/phase-6-safety/privacy-and-data/ai-and-copyright.json';
import teamAiGovernance from '../courses/ai-basics/phase-6-safety/privacy-and-data/team-ai-governance.json';
import enterpriseAiImplementationPlaybook from '../courses/ai-basics/phase-6-safety/privacy-and-data/enterprise-ai-implementation-playbook.json';

// AI Basics — phase-7-intermediate-systems — rag-and-memory
import ragExplained from '../courses/ai-basics/phase-7-intermediate-systems/rag-and-memory/rag-explained.json';

// AI Basics — phase-7-intermediate-systems — embeddings-and-vectors
import embeddingsSimply from '../courses/ai-basics/phase-7-intermediate-systems/embeddings-and-vectors/embeddings-simply.json';
import vectorDatabasesInPractice from '../courses/ai-basics/phase-7-intermediate-systems/embeddings-and-vectors/vector-databases-in-practice.json';

// AI Basics — phase-8-advanced-ai — mcp-and-skills
import whatIsMcp from '../courses/ai-basics/phase-8-advanced-ai/mcp-and-skills/what-is-mcp.json';
import aiSkillsExplained from '../courses/ai-basics/phase-8-advanced-ai/mcp-and-skills/ai-skills-explained.json';

// AI Basics — phase-8-advanced-ai — multimodal-ai
import imagesAndAi from '../courses/ai-basics/phase-8-advanced-ai/multimodal-ai/images-and-ai.json';
import voiceAndVideoAi from '../courses/ai-basics/phase-8-advanced-ai/multimodal-ai/voice-and-video-ai.json';

// AI Basics — phase-8-advanced-ai — local-vs-cloud-ai
import localAiOptions from '../courses/ai-basics/phase-8-advanced-ai/local-vs-cloud-ai/local-ai-options.json';

// AI Basics — phase-9-capstone — personal-ai-stack
import buildingYourAiStack from '../courses/ai-basics/phase-9-capstone/personal-ai-stack/building-your-ai-stack.json';
import aiRoadmapByRole from '../courses/ai-basics/phase-9-capstone/personal-ai-stack/ai-roadmap-by-role.json';
import aiProjectPortfolioAndCapstoneAssessments from '../courses/ai-basics/phase-9-capstone/personal-ai-stack/ai-project-portfolio-and-capstone-assessments.json';

// AI Basics — phase-9-capstone — staying-current
import stayingCurrentInAi from '../courses/ai-basics/phase-9-capstone/staying-current/staying-current-in-ai.json';

// Codex — phase-1-foundations — intro-to-ai-coding
import whatIsAiCoding from '../courses/codex/phase-1-foundations/intro-to-ai-coding/what-is-ai-coding.json';

// Codex — phase-1-foundations — prompt-engineering-for-code
import basicPromptingForCode from '../courses/codex/phase-1-foundations/prompt-engineering-for-code/basic-prompting-for-code.json';

// Codex — phase-2-tools — ai-coding-tools
import githubCopilotGuide from '../courses/codex/phase-2-tools/ai-coding-tools/github-copilot-guide.json';
import cursorIdeGuide from '../courses/codex/phase-2-tools/ai-coding-tools/cursor-ide-guide.json';
import chatAssistantsForCoding from '../courses/codex/phase-2-tools/ai-coding-tools/chat-assistants-for-coding.json';

// Codex — phase-3-workflows — practical-ai-workflows
import debuggingWithAi from '../courses/codex/phase-3-workflows/practical-ai-workflows/debugging-with-ai.json';
import writingTestsWithAi from '../courses/codex/phase-3-workflows/practical-ai-workflows/writing-tests-with-ai.json';

// Codex — phase-3-workflows — agentic-workflows
import agenticCodingIntro from '../courses/codex/phase-3-workflows/agentic-workflows/agentic-coding-intro.json';

// Codex — phase-4-advanced-techniques — security-and-testing
import aiSecurityRisks from '../courses/codex/phase-4-advanced-techniques/security-and-testing/ai-security-risks.json';

const rawLessons = [
  aiVsMlVsGenerativeAi,
  howLlmsWorkSimply,
  whatAiCanAndCannotDo,
  anatomyOfAGoodPrompt,
  aiInEverydayLife,
  chatbotLandscape,
  choosingTheRightTool,
  promptPatterns,
  commonPromptingMistakes,
  tokensExplained,
  contextWindowDeepDive,
  aiHallucinationDeepDive,
  evaluatingAiOutput,
  chatgptGuide,
  modelComparison,
  aiForResearch,
  chainOfThoughtPrompting,
  fewShotPrompting,
  buildingYourFirstWorkflow,
  whatIsAiAutomation,
  noCodeAutomationTools,
  whatAreAgents,
  howAgentsWork,
  whatIsToolCalling,
  aiLimitations,
  criticalEvaluation,
  protectingYourData,
  ragExplained,
  embeddingsSimply,
  whatIsMcp,
  aiSkillsExplained,
  imagesAndAi,
  localAiOptions,
  buildingYourAiStack,
  stayingCurrentInAi,
  aiWritingAssistant,
  editingWithAi,
  voiceAndVideoAi,
  systemPromptsAndCustomInstructions,
  aiForCoding,
  aiAndCopyright,
  aiForDataAnalysis,
  promptDebuggingWorkflow,
  agentGuardrailsAndApprovals,
  aiEvaluationMetrics,
  teamAiGovernance,
  vectorDatabasesInPractice,
  aiRoadmapByRole,
  modelSelectionAndCostOptimization,
  aiProductDesignLifecycle,
  promptSecurityAndJailbreakDefense,
  enterpriseAiImplementationPlaybook,
  aiProjectPortfolioAndCapstoneAssessments,
  // Codex course
  whatIsAiCoding,
  basicPromptingForCode,
  githubCopilotGuide,
  cursorIdeGuide,
  chatAssistantsForCoding,
  debuggingWithAi,
  writingTestsWithAi,
  agenticCodingIntro,
  aiSecurityRisks,
  // .NET + React AI Lead course
  // Phase 1: Advanced .NET & System Design
  dotnetAsyncDeepDive,
  dotnetMemoryManagement,
  dotnetDiPatterns,
  dotnetModernCsharpFeatures,
  dotnetDistributedSystemsFundamentals,
  dotnetMicroservicesPatterns,
  dotnetApiDesignBestPractices,
  dotnetEventDrivenArchitecture,
  dotnetProfilingBenchmarking,
  dotnetCachingStrategies,
  dotnetMessageQueues,
  dotnetHorizontalVerticalScaling,
  dotnetResilientAiClients,
  dotnetStreamingApisBackground,
  dotnetDurableWorkflows,
  // Phase 2: React/TypeScript & Modern Frontend
  dotnetReactInternals,
  dotnetCustomHooksPatterns,
  dotnetReactPerformanceOptimization,
  dotnetAdvancedComponentPatterns,
  dotnetTypescriptGenerics,
  dotnetTypescriptUtilityTypes,
  dotnetTypescriptConditionalTypes,
  dotnetTypescriptTypeSafetyPatterns,
  dotnetContextAndRedux,
  dotnetReactQueryServerState,
  dotnetFormStateManagement,
  dotnetStateArchitecturePatterns,
  dotnetStreamingAiUx,
  dotnetToolCallStatus,
  dotnetConversationState,
  // Phase 3: Generative AI & LLM Integration
  dotnetTransformerArchitecture,
  dotnetTokenizationEmbeddings,
  dotnetContextWindowParameters,
  dotnetModelSelectionEvaluation,
  dotnetSystemPrompts,
  dotnetFewShotPrompting,
  dotnetChainOfThought,
  dotnetStructuredOutputPrompts,
  dotnetOpenaiSdkBasics,
  dotnetAzureOpenaiIntegration,
  dotnetLocalModelsOllama,
  dotnetStreamingErrorHandling,
  dotnetSemanticKernelBasics,
  dotnetSkillsPlugins,
  dotnetPlannersConnectors,
  dotnetSkMemoryEmbeddings,
  dotnetModelRouting,
  dotnetMultimodalAi,
  dotnetMicrosoftExtensionsAi,
  dotnetDirectApisVsAbstractions,
  // Phase 4: RAG, Agents & MCP
  dotnetRagArchitecture,
  dotnetVectorDatabases,
  dotnetChunkingStrategies,
  dotnetHybridSearch,
  dotnetAdvancedRetrieval,
  dotnetMicrosoftExtensionsVectordata,
  dotnetAgentFundamentals,
  dotnetToolCalling,
  dotnetAgentPlanning,
  dotnetMultiAgentSystems,
  dotnetAgentOrchestration,
  dotnetMcpFundamentals,
  dotnetBuildingMcpServers,
  dotnetMcpClientIntegration,
  dotnetMcpToolsResources,
  dotnetMcpAuthorizationSecurity,
  // Phase 5: Azure Cloud & DevOps
  dotnetAzureAppService,
  dotnetAzureFunctions,
  dotnetCosmosDb,
  dotnetAzureSql,
  dotnetDockerContainerization,
  dotnetKubernetesAks,
  dotnetGithubActions,
  dotnetInfrastructureAsCode,
  dotnetApplicationInsights,
  dotnetStructuredLogging,
  dotnetMetricsDashboards,
  dotnetDistributedTracing,
  dotnetAzureAiServices,
  dotnetCostMonitoring,
  // Phase 6: Security, Testing & AI-Assisted Dev
  dotnetAuthenticationAuthorization,
  dotnetOwaspTop10,
  dotnetSecureCoding,
  dotnetSecretsManagement,
  dotnetAiSecurityGovernance,
  dotnetUnitTesting,
  dotnetIntegrationTesting,
  dotnetE2eTesting,
  dotnetTddBestPractices,
  dotnetAiEvaluation,
  dotnetGithubCopilot,
  dotnetAiCodeReview,
  dotnetAiRefactoring,
  dotnetAiDebugging,
  // Phase 7: Capstone Project
  dotnetCapstoneArchitecture,
  dotnetCapstoneDataModel,
  dotnetCapstoneRagDesign,
  dotnetCapstoneSecurityDesign,
  dotnetCapstoneBackend,
  dotnetCapstoneFrontend,
  dotnetCapstoneRagImplementation,
  dotnetCapstoneDeployment,
  dotnetEvaluationProduction,
  // Phase 1: New module - Clean Architecture & .NET Aspire
  dotnetDomainDrivenDesign,
  dotnetCleanArchitectureNet,
  dotnetCqrsEventSourcing,
  dotnetAspireOrchestration,
  // Phase 1: New lessons under performance-scaling
  dotnetNativeAotAi,
  dotnetDistributedCacheAi,
  // Phase 2: New lessons under advanced-react-patterns
  dotnetReactServerActionsAi,
  dotnetReactServerComponentsAi,
  // Phase 3: New module - Embedding Systems & Vector Engineering
  dotnetEmbeddingModelOptimization,
  dotnetVectorIndexOptimization,
  dotnetCrossEncoderReranking,
  dotnetEmbeddingCacheStrategies,
  // Phase 4: New module - Agent Memory & Human-in-the-Loop
  dotnetAgentMemoryArchitectures,
  dotnetAgentEvaluationMonitoring,
  dotnetHumanInTheLoopAgents,
  dotnetAgentDebuggingTracing,
  // Phase 4: New lessons under rag-fundamentals
  dotnetRetrievalOptimization,
  dotnetRagEvaluation,
  dotnetRagProductionPatterns,
  // Phase 4: New lessons under mcp-integration
  dotnetMcpSessionsLifecycle,
  dotnetMcpPromptTemplates,
  dotnetMcpProductionDeployment,
  // Phase 5: New lessons under monitoring-observability
  dotnetAiObservabilityInsights,
  dotnetLlmOpentelemetryTracing,
  // Phase 6: New lesson under ai-assisted-dev
  dotnetAiPairProgramming,
];

export const lessons: Lesson[] = rawLessons as unknown as Lesson[];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getLessonsByModule(moduleSlug: string): Lesson[] {
  return lessons
    .filter((l) => l.moduleSlug === moduleSlug)
    .sort((a, b) => a.order - b.order);
}

export function getAdjacentLessons(
  lesson: Lesson,
  allLessons: Lesson[]
): { prev: Lesson | null; next: Lesson | null } {
  const moduleLessons = allLessons
    .filter((l) => l.moduleSlug === lesson.moduleSlug)
    .sort((a, b) => a.order - b.order);
  const idx = moduleLessons.findIndex((l) => l.slug === lesson.slug);
  return {
    prev: idx > 0 ? moduleLessons[idx - 1] : null,
    next: idx < moduleLessons.length - 1 ? moduleLessons[idx + 1] : null,
  };
}
