import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Stack, router } from 'expo-router';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  title: 'Dashboard',
};

type TabKey = 'studies' | 'query' | 'test' | 'career';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'studies', label: 'Studies' },
  { key: 'query', label: 'Query' },
  { key: 'test', label: 'Test' },
  { key: 'career', label: 'Career Awareness' },
];

export default function DashboardScreen() {
  const [activeTab, setActiveTab] = React.useState<TabKey>('studies');

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-background"
        bounces={false}>
        <View className="flex-1 gap-8 px-6 pb-10 pt-20">
          <View className="gap-2">
            <Text className="text-xs font-medium uppercase tracking-wide text-primary">
              GyanShala
            </Text>
            <Text className="text-2xl font-semibold text-foreground">Your learning dashboard</Text>
            <Text className="text-sm text-muted-foreground">
              Choose what you want to focus on today: studies, queries, tests, or career guidance.
            </Text>
          </View>

          {/* Tabs */}
          <View className="flex-row gap-2 rounded-full border border-border/70 bg-card/80 p-1">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <Button
                  key={tab.key}
                  variant={isActive ? 'default' : 'ghost'}
                  className="flex-1 rounded-full"
                  onPress={() => setActiveTab(tab.key)}>
                  <Text className="text-xs font-medium">{tab.label}</Text>
                </Button>
              );
            })}
          </View>

          {/* Tab content */}
          {activeTab === 'studies' && (
            <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
              <Text className="text-sm font-semibold text-foreground">Studies</Text>
              <Text className="text-xs text-muted-foreground">
                Access lessons and practise materials in your preferred language. Soon you will see
                your enrolled courses and current topics here.
              </Text>
            </View>
          )}

          {activeTab === 'query' && (
            <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
              <Text className="text-sm font-semibold text-foreground">Query</Text>
              <Text className="text-xs text-muted-foreground">
                Ask questions to teachers or the AI assistant when you are stuck. This area will
                show your recent questions and answers.
              </Text>
            </View>
          )}

          {activeTab === 'test' && (
            <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
              <Text className="text-sm font-semibold text-foreground">Test</Text>
              <Text className="text-xs text-muted-foreground">
                Take quick tests to check your understanding. Upcoming quizzes and completed scores
                will appear here.
              </Text>
            </View>
          )}

          {activeTab === 'career' && (
            <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
              <Text className="text-sm font-semibold text-foreground">Career Awareness</Text>
              <Text className="text-xs text-muted-foreground">
                Explore different career paths, entrance exams, and guidance tailored for rural
                learners. You will find stories, tips, and next steps here.
              </Text>
            </View>
          )}

          <Button
            className="mt-4 rounded-2xl"
            variant="outline"
            onPress={() => {
              router.replace('/');
            }}>
            <Text className="font-medium">Back to home</Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
}

