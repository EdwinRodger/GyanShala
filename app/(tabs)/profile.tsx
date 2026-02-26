import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { clearCurrentUser, getCurrentUser } from '@/lib/session';
import { Stack, router } from 'expo-router';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  title: 'Profile',
};

export default function ProfileScreen() {
  const user = getCurrentUser();

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
              Profile
            </Text>
            <Text className="text-2xl font-semibold text-foreground">Your learning profile</Text>
            <Text className="text-sm text-muted-foreground">
              View basic learner details and quick links to your queries and career awareness space.
            </Text>
          </View>

          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">Basic details</Text>
            <Text className="text-xs text-muted-foreground">
              Name:{' '}
              <Text className="font-semibold text-foreground">
                {user?.name ?? 'Learner'}
              </Text>
            </Text>
            <Text className="text-xs text-muted-foreground">
              Email:{' '}
              <Text className="font-semibold text-foreground">
                {user?.email ?? 'Not set'}
              </Text>
            </Text>
            <Text className="text-xs text-muted-foreground">
              These details are kept only while the app is open in this session.
            </Text>
          </View>

          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">Your queries</Text>
            <Text className="text-xs text-muted-foreground">
              Go to the Queries tab to ask doubts and see answers in your preferred language.
            </Text>
            <Button
              size="sm"
              className="self-start rounded-full px-4 py-1.5"
              onPress={() => router.replace('/(tabs)/query')}>
              <Text className="text-xs font-medium text-primary-foreground">Open Query</Text>
            </Button>
          </View>

          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">Career awareness</Text>
            <Text className="text-xs text-muted-foreground">
              Open a simple tool that suggests possible study paths, exams and scholarships using
              offline career data.
            </Text>
            <Button
              size="sm"
              variant="outline"
              className="self-start rounded-full px-4 py-1.5"
              onPress={() => router.push('/career')}>
              <Text className="text-xs font-medium">Open career guidance</Text>
            </Button>
          </View>

          <View className="gap-3 rounded-2xl border border-destructive/60 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-destructive">
              Logout
            </Text>
            <Text className="text-xs text-muted-foreground">
              End this learning session and go back to the login screen.
            </Text>
            <Button
              size="sm"
              variant="outline"
              className="self-start rounded-full px-4 py-1.5 border-destructive/70"
              onPress={() => {
                clearCurrentUser();
                router.replace('/auth');
              }}>
              <Text className="text-xs font-medium text-destructive">Logout</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

