import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Stack, router } from 'expo-router';
import { BookOpenIcon, Globe2Icon, SparklesIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  title: 'GyanShala',
  headerTransparent: true,
};

const LANGUAGES = ['English', 'हिन्दी', 'বাংলা', 'தமிழ்', 'తెలుగు', 'मराठी'];

export default function HomeScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-background"
        bounces={false}>
        <View className="flex-1 gap-10 px-6 pb-10 pt-24">
          {/* Hero */}
          <View className="gap-4">
            <View className="self-start rounded-full bg-primary/10 px-3 py-1">
              <Text className="text-xs font-medium text-primary">
                Multilingual Rural Learning Portal
              </Text>
            </View>

            <Text className="text-3xl font-semibold text-foreground">
              Learning that reaches every village.
            </Text>

            <Text className="text-base text-muted-foreground">
              A low-bandwidth, AI-powered education platform bringing quality learning to rural
              communities in multiple regional languages.
            </Text>
          </View>

          {/* Primary actions */}
          <View className="flex-row gap-3">
            <Button
              className="flex-1"
              onPress={() => {
                router.push('/auth');
              }}>
              <Text className="font-medium text-primary-foreground">Start Learning</Text>
            </Button>
            <Button className="flex-1" variant="outline">
              <Text className="font-medium">Browse Courses</Text>
            </Button>
          </View>

          {/* Key highlights */}
          <View className="gap-4 rounded-3xl border border-border/60 bg-card/80 p-4">
            <View className="flex-row items-center gap-3">
              <View className="rounded-full bg-primary/10 p-2">
                <Icon as={SparklesIcon} className="text-primary" />
              </View>
              <Text className="text-base font-semibold text-foreground">
                Built for low connectivity
              </Text>
            </View>
            <Text className="text-sm text-muted-foreground">
              Lessons are optimized to work smoothly on 2G/3G networks, with offline-first content
              and lightweight media so learners never miss a class.
            </Text>
          </View>

          {/* Feature cards */}
          <View className="flex-row gap-3">
            <View className="flex-1 gap-3 rounded-2xl border border-border/60 bg-card/80 p-3">
              <View className="rounded-full bg-primary/10 p-2 self-start">
                <Icon as={Globe2Icon} className="text-primary" />
              </View>
              <Text className="text-sm font-semibold text-foreground">Multiple Languages</Text>
              <Text className="text-xs text-muted-foreground">
                Switch between regional languages so students can learn in the language they
                understand best.
              </Text>
            </View>

            <View className="flex-1 gap-3 rounded-2xl border border-border/60 bg-card/80 p-3">
              <View className="rounded-full bg-primary/10 p-2 self-start">
                <Icon as={BookOpenIcon} className="text-primary" />
              </View>
              <Text className="text-sm font-semibold text-foreground">AI Learning Guide</Text>
              <Text className="text-xs text-muted-foreground">
                AI-assisted summaries, practice questions, and explanations tailored to each
                learner&apos;s pace.
              </Text>
            </View>
          </View>

          {/* Language chips */}
          <View className="gap-3">
            <Text className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Supported Languages
            </Text>
            <View className="flex-row flex-wrap gap-2">
              {LANGUAGES.map((lang) => (
                <View
                  key={lang}
                  className="rounded-full border border-border/70 bg-background/80 px-3 py-1">
                  <Text className="text-xs text-foreground">{lang}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Footer note */}
          <View className="gap-1">
            <Text className="text-[11px] font-medium text-muted-foreground">
              Designed for schools, NGOs & community centres.
            </Text>
            <Text className="text-[11px] text-muted-foreground">
              Bring GyanShala to your village and keep every learner connected.
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
